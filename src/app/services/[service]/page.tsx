import React from "react";

import { Metadata } from "next";
import Website from "@/app/components/service_details/website";
import SocialsMedia from "@/app/components/service_details/social_media";
import SEO from "@/app/components/service_details/seo";

type Params = {
  params: {
    service: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // read route params
  const service = params.service;

  return {
    title: `ActiceUp - ${service}`,
  };
}

export default function ProjectDetail({ params: { service } }: Params) {
  switch (service) {
    case "website":
      return <Website />;
    case "social_media_marketing":
      return <SocialsMedia />;
    case "seo":
      return <SEO />;
    default:
      return <div>Not found</div>;
  }
}
