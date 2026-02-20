import { editor } from "@silverbulletmd/silverbullet/syscalls";
import { CodeWidgetContent } from "@silverbulletmd/silverbullet/type/client";

export async function pomlWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  await editor.flashNotification("Hello world!");
}
