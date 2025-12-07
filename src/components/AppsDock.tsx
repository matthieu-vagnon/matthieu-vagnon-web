"use client";

import { profile } from "@/data/profile";
import { useActiveModal } from "@/hooks/useActiveModal";
import { useDockStatus } from "@/hooks/useDockStatus";
import { Link } from "@/i18n/navigation";
import {
  BriefcaseBusiness,
  Cog,
  HeartHandshake,
  HomeIcon,
  MessageCircle,
  Newspaper,
  UserRound,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { ConfigurationModal } from "./ConfigurationModal";
import { ContactModal } from "./ContactModal";
import { Dock, DockIcon, DockItem, DockLabel } from "./Dock";
import { Dialog } from "./NestedDialog";
import { ProgressiveBlur } from "./ProgressiveBlur";
import { Separator } from "./Separator";

function DockElement({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <DockItem>
      <DockLabel>{title}</DockLabel>
      <DockIcon>{icon}</DockIcon>
    </DockItem>
  );
}

export default function AppsDock() {
  const { isDockOpen } = useDockStatus();
  const t = useTranslations();
  const { activeModal, setActiveModal } = useActiveModal();

  const apps = [
    {
      title: t("home.title"),
      icon: <HomeIcon className="h-full w-full text-neutral-600" />,
      url: "/",
    },
    {
      title: t("profile.title"),
      icon: <UserRound className="h-full w-full text-neutral-600" />,
      url: "/profile",
    },
    {
      title: t("yourProject.tooltip"),
      icon: <HeartHandshake className="h-full w-full text-neutral-600" />,
      url: "/your-project",
    },
    {
      title: t("caseStudies.title"),
      icon: <BriefcaseBusiness className="h-full w-full text-neutral-600" />,
      url: "/case-studies",
    },
    {
      title: t("utils.blog"),
      icon: <Newspaper className="h-full w-full text-neutral-600" />,
      url: `${profile.socials.linkedin.link.fr}/recent-activity/all/`,
      newTab: true,
    },
  ];

  const modals = [
    {
      action: "contact",
      title: t("getInTouch.title"),
      icon: <MessageCircle className="h-full w-full text-neutral-600" />,
      modal: <ContactModal />,
    },
    {
      action: "configure",
      title: t("configure.title"),
      icon: <Cog className="h-full w-full text-neutral-600" />,
      modal: <ConfigurationModal />,
    },
  ];

  return (
    <Dialog open={!!activeModal} setActiveModal={setActiveModal}>
      <div
        className={`fixed bottom-0 pb-2 left-1/2 w-full -translate-x-1/2 z-100 ${
          isDockOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300`}
      >
        <Dock className="items-end pb-3">
          {apps.map((app, idx) => (
            <Link
              key={idx}
              href={app.url}
              target={app.newTab ? "_blank" : "_self"}
            >
              <DockElement title={app.title} icon={app.icon} />
            </Link>
          ))}
          <Separator orientation="vertical" className="h-10" />
          {modals.map((modal, idx) => (
            <button key={idx} onClick={() => setActiveModal(modal.action)}>
              <DockElement title={modal.title} icon={modal.icon} />
            </button>
          ))}
        </Dock>
      </div>
      {activeModal !== undefined &&
        modals.find((modal) => modal.action === activeModal)?.modal}
      <ProgressiveBlur
        direction="bottom"
        className="pointer-events-none fixed bottom-0 left-0 h-36 w-full z-99 bg-linear-to-b from-transparent to-white dark:to-black from-66%"
      />
    </Dialog>
  );
}
