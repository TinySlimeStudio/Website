"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PatchNote({
  notes
}: {
  notes: {
    version: string
    beta: boolean
    changes: {
      badge: number
      text: string
    }[]
  }[]
}) {
  const badgeTypes = [
    {
      id: 1,
      label: "Added",
      variant: "green" as "green",
      icon: "solar:check-circle-bold-duotone",
    },
    {
      id: 2,
      label: "Updated",
      variant: "blue" as "blue",
      icon: "solar:cash-out-bold-duotone",
    },
    {
      id: 3,
      label: "Fix",
      variant: "red" as "red",
      icon: "solar:danger-bold-duotone",
    },
    {
      id: 4,
      label: "Rework",
      variant: "yellow" as "yellow",
      icon: "solar:danger-triangle-bold-duotone",
    },
    {
      id: 5,
      label: "Migrate",
      variant: "orange" as "orange",
      icon: "solar:refresh-bold-duotone",
    },
    {
      id: 6,
      label: "Integration",
      variant: "purple" as "purple",
      icon: "solar:star-bold-duotone",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {notes.map((note, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="py-2">
            <p className="text-muted-foreground text-lg">
              {note.beta && (
                <Badge variant="yellow" className="mr-2">
                  <Icon icon="solar:danger-triangle-bold-duotone" />
                  Beta
                </Badge>
              )}
              Version {note.version}
            </p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ul className="ml-2 list [&>li]:mt-1">
              {note.changes.map((change, idx) => {
                const badge = badgeTypes.find(
                  (type) => type.id === change.badge
                );
                return (
                  <li key={idx}>
                    {badge && (
                      <Badge variant={badge.variant} className="mr-2 w-30">
                        <Icon icon={badge.icon} />
                        {badge.label}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">{change.text}</span>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
