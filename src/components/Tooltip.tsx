import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface CustomTooltipProperties {
  open: boolean;
  children: ReactElement;
}

export default function CustomTooltip({
  open,
  children,
}: CustomTooltipProperties) {
  const { t } = useTranslation();

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={open}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-neutral-700 p-2 rounded-md max-w-[250px]"
            side="bottom"
          >
            <Tooltip.Arrow className="fill-neutral-700"/>
            <span className="font-medium text-white">{t("STACKS.TOOLTIP")}</span>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
