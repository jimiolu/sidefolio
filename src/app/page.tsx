import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black tracking-wide">
        Hello there! I&apos;m Jimi
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer with 5+ years of experience{" "}
        <Highlight>building high-impact products</Highlight> and web apps that
        solves human pain points.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I specialize in creating&nbsp;
        <Highlight>scalable solutions</Highlight> that deliver meaningful impact
        at scale.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
