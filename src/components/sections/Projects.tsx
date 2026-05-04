import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal, Prompt } from "@/components/Terminal";
import { TopologyDiagram } from "@/components/TopologyDiagram";
import { ReactNode } from "react";

function PSIR({ p, s, i, r }: { p: string; s: string; i: ReactNode; r: string }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 text-sm">
      {[
        { k: "Problem", v: p, c: "text-destructive" },
        { k: "Solution", v: s, c: "text-secondary" },
        { k: "Result", v: r, c: "text-green-400" },
      ].map((x) => (
        <div key={x.k} className="rounded-md border border-border bg-background/40 p-3">
          <div className={`font-mono text-[10px] uppercase tracking-wider ${x.c}`}>{x.k}</div>
          <p className="mt-1 text-muted-foreground">{x.v}</p>
        </div>
      ))}
      <div className="rounded-md border border-border bg-background/40 p-3">
        <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Implementation</div>
        <div className="mt-1 text-muted-foreground">{i}</div>
      </div>
    </div>
  );
}

function ProjectCard({
  num, title, tags, children, diagram,
}: {
  num: string; title: string; tags: string[]; children: ReactNode; diagram: ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-card/50 overflow-hidden"
    >
      <div className="p-6 border-b border-border flex flex-wrap items-center gap-3 justify-between">
        <div>
          <div className="font-mono text-xs text-primary">project_{num}</div>
          <h3 className="text-xl font-semibold mt-1">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">{children}</div>
        <div className="space-y-4 order-first lg:order-none">{diagram}</div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03 / projects"
          title="Hands-on lab projects"
          subtitle="Each project follows a Problem → Solution → Implementation → Result structure with real CLI configs and topologies."
        />
        <div className="space-y-8">
          <ProjectCard
            num="01"
            title="ACL Traffic Control"
            tags={["ACL", "Cisco IOS", "Security"]}
            diagram={
              <>
                <TopologyDiagram
                  nodes={[
                    { id: "pc1", x: 50, y: 60, label: "HR-PC", type: "host" },
                    { id: "pc2", x: 50, y: 180, label: "Guest-PC", type: "host" },
                    { id: "sw", x: 170, y: 120, label: "SW1", type: "switch" },
                    { id: "r1", x: 280, y: 120, label: "R1", type: "router" },
                    { id: "srv", x: 370, y: 120, label: "Server", type: "host" },
                  ]}
                  edges={[
                    { from: "pc1", to: "sw" },
                    { from: "pc2", to: "sw" },
                    { from: "sw", to: "r1", label: "Gi0/0" },
                    { from: "r1", to: "srv", label: "ACL-IN" },
                  ]}
                />
                <Terminal title="R1# — extended ACL">
                  <Prompt>conf t</Prompt>
                  <span>access-list 110 deny ip 192.168.20.0 0.0.0.255 host 10.0.0.5{"\n"}</span>
                  <span>access-list 110 permit ip any any{"\n"}</span>
                  <span>interface Gi0/1{"\n"}</span>
                  <span> ip access-group 110 out{"\n"}</span>
                  <Prompt>show access-lists</Prompt>
                  <span className="text-green-400">Extended IP access list 110 (matches: 14)</span>
                </Terminal>
              </>
            }
          >
            <PSIR
              p="Guest VLAN devices could reach the HR file server, violating data isolation policy."
              s="Apply an extended ACL on R1's egress interface to deny Guest subnet to the server's IP, then permit everything else."
              i={<>Wrote <span className="font-mono text-primary">access-list 110</span> with explicit deny + permit, applied <span className="font-mono text-primary">ip access-group 110 out</span> on Gi0/1.</>}
              r="Before: Guest could ping the server. After: ICMP/TCP from Guest dropped, HR retained full access."
            />
          </ProjectCard>

          <ProjectCard
            num="02"
            title="OSPF Dynamic Routing"
            tags={["OSPF", "Multi-Area", "Routing"]}
            diagram={
              <>
                <TopologyDiagram
                  nodes={[
                    { id: "r1", x: 70, y: 120, label: "R1 / Area0", type: "router" },
                    { id: "r2", x: 200, y: 60, label: "R2 / Area0", type: "router" },
                    { id: "r3", x: 200, y: 180, label: "R3 / Area1", type: "router" },
                    { id: "r4", x: 340, y: 120, label: "R4 / Area1", type: "router" },
                  ]}
                  edges={[
                    { from: "r1", to: "r2", label: "10.0.12.0/30" },
                    { from: "r1", to: "r3", label: "10.0.13.0/30" },
                    { from: "r2", to: "r4", label: "10.0.24.0/30" },
                    { from: "r3", to: "r4", label: "10.0.34.0/30" },
                  ]}
                />
                <Terminal title="R1(config)# — ospf">
                  <Prompt>conf t</Prompt>
                  <span>router ospf 10{"\n"}</span>
                  <span> router-id 1.1.1.1{"\n"}</span>
                  <span> network 10.0.12.0 0.0.0.3 area 0{"\n"}</span>
                  <span> network 10.0.13.0 0.0.0.3 area 0{"\n"}</span>
                  <Prompt>show ip route ospf</Prompt>
                  <span className="text-green-400">O    10.0.24.0/30 [110/2] via 10.0.12.2{"\n"}</span>
                  <span className="text-green-400">O IA 10.0.34.0/30 [110/3] via 10.0.13.2</span>
                </Terminal>
              </>
            }
          >
            <PSIR
              p="Static routes across 4 routers became unmanageable when links flapped."
              s="Deploy OSPF with two areas (backbone + Area 1) for automatic convergence and loop-free paths."
              i={<>Configured <span className="font-mono text-primary">router ospf 10</span> on each device, advertised networks with proper wildcard masks, set router-IDs.</>}
              r="Sub-second reconvergence on link failure. Full-mesh reachability verified with show ip route."
            />
          </ProjectCard>

          <ProjectCard
            num="03"
            title="Network Troubleshooting Lab"
            tags={["OSI Model", "Wireshark", "Diagnostics"]}
            diagram={
              <>
                <TopologyDiagram
                  nodes={[
                    { id: "pc", x: 60, y: 120, label: "Client", type: "host" },
                    { id: "sw", x: 180, y: 120, label: "SW1", type: "switch" },
                    { id: "r1", x: 290, y: 120, label: "Gateway", type: "router" },
                    { id: "www", x: 380, y: 120, label: "WWW", type: "cloud" },
                  ]}
                  edges={[
                    { from: "pc", to: "sw" },
                    { from: "sw", to: "r1", dashed: true, label: "trunk?" },
                    { from: "r1", to: "www" },
                  ]}
                />
                <Terminal title="diagnostics">
                  <Prompt>ping 8.8.8.8</Prompt>
                  <span className="text-destructive">Request timed out.{"\n"}</span>
                  <Prompt>ipconfig /all</Prompt>
                  <span>IPv4 . . . : 192.168.10.42{"\n"}</span>
                  <span className="text-destructive">Default Gateway: (none){"\n"}</span>
                  <Prompt>show interfaces trunk</Prompt>
                  <span className="text-yellow-400">Fa0/1 — mode: access (expected: trunk){"\n"}</span>
                  <Prompt>switchport mode trunk</Prompt>
                  <span className="text-green-400">✓ Reply from 8.8.8.8: time=12ms</span>
                </Terminal>
              </>
            }
          >
            <PSIR
              p="Client could reach local devices but had no internet — gateway unreachable."
              s="Walked the OSI stack: L1 link OK → L2 trunk misconfigured → VLAN tags dropped → no DHCP gateway."
              i={<>Verified link, ARP, and VLAN tagging. Switched the uplink port from access to trunk mode and re-issued <span className="font-mono text-primary">ipconfig /renew</span>.</>}
              r="Gateway populated, internet restored. Documented the runbook for future on-call shifts."
            />
          </ProjectCard>

          <ProjectCard
            num="04"
            title="AWS Cloud Infrastructure"
            tags={["AWS", "VPC", "EC2", "IAM"]}
            diagram={
              <>
                <TopologyDiagram
                  nodes={[
                    { id: "igw", x: 60, y: 60, label: "IGW", type: "cloud" },
                    { id: "pub", x: 180, y: 60, label: "Public Subnet", type: "switch" },
                    { id: "ec2", x: 180, y: 180, label: "EC2 Web", type: "host" },
                    { id: "priv", x: 300, y: 60, label: "Private Subnet", type: "switch" },
                    { id: "s3", x: 360, y: 180, label: "S3 Bucket", type: "cloud" },
                  ]}
                  edges={[
                    { from: "igw", to: "pub" },
                    { from: "pub", to: "ec2" },
                    { from: "pub", to: "priv", dashed: true, label: "RT" },
                    { from: "ec2", to: "s3", label: "IAM role" },
                  ]}
                />
                <Terminal title="aws cli">
                  <Prompt>aws ec2 create-vpc --cidr-block 10.10.0.0/16</Prompt>
                  <span className="text-green-400">VpcId: vpc-0a1b2c3d{"\n"}</span>
                  <Prompt>aws ec2 run-instances --image-id ami-xxx \</Prompt>
                  <span>  --instance-type t2.micro --subnet-id subnet-pub{"\n"}</span>
                  <Prompt>aws s3 mb s3://diaa-netlab-logs</Prompt>
                  <span className="text-green-400">make_bucket: diaa-netlab-logs</span>
                </Terminal>
              </>
            }
          >
            <PSIR
              p="Needed an isolated cloud sandbox to host a web app with secure object storage."
              s="Designed a VPC with public + private subnets, NAT-routed, EC2 in public, S3 access via IAM role only."
              i={<>Created VPC <span className="font-mono text-primary">10.10.0.0/16</span>, route tables, security groups (22/80/443), launched EC2, attached scoped IAM policy for S3.</>}
              r="Hardened least-privilege architecture. EC2 ↔ S3 traffic stayed inside AWS network — zero egress cost."
            />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
