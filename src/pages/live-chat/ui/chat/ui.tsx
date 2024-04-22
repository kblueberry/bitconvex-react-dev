import { ActionIcon, Avatar, Divider, Group, ScrollArea, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { ChatsIcon } from "@/shared/ui/icon/ChatsIcon";
import { Clip } from "@/shared/ui/icon/Clip";
import { ReadMessage } from "@/shared/ui/icon/ReadMessage";
import { SendIcon } from "@/shared/ui/icon/SendIcon";
import { UnreadMessage } from "@/shared/ui/icon/UnreadMessage";

import classes from "./styles.module.css";

const mokeChats = [
  {
    id: 1,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    chatName: "BitConvex 1",
    chatRole: "Support Admin",
    date: "28 Dec",
    isOnline: true,
    description: "Hey Cak, Could you free now? Can you look and read the brief first…",
  },
  {
    id: 2,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    chatName: "BitConvex long name",
    chatRole: "Support Admin long role",
    date: "28 Dec",
    isOnline: false,
    description: "Hey Cak, Could you free now? Can you look and read the brief first… long description wwwwwwwwwwwwwwwwwwwwwww",
  },
  {
    id: 3,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    chatName: "BitConvex 3",
    chatRole: "Support Admin",
    date: "28 Dec",
    isOnline: true,
    description: "Hey Cak, Could you free now? Can you look and read the brief first…",
  },
  {
    id: 4,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    chatName: "BitConvex 4",
    chatRole: "Support Admin",
    date: "28 Dec",
    isOnline: false,
    description: "Hey Cak, Could you free now? Can you look and read the brief first…",
  },
  {
    id: 5,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    chatName: "BitConvex 5",
    chatRole: "Support Admin",
    date: "28 Dec",
    isOnline: true,
    description: "Hey Cak, Could you free now? Can you look and read the brief first…",
  },
  {
    id: 6,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    chatName: "BitConvex 6",
    chatRole: "Support Admin",
    date: "28 Dec",
    isOnline: true,
    description: "Hey Cak, Could you free now? Can you look and read the brief first…",
  },
];

export const Chat = () => {
  const [activeChat, setActiveChat] = useState<(typeof mokeChats)[number] | null>(null);
  return (
    <Stack className={classes.pageContainer} gap={rem("64px")}>
      <Text className={classes.chatTitle}>Support</Text>
      <Group gap={32} className={classes.chatContainer}>
        <Stack gap={32} className={clsx(classes.chatsBlock, classes.chatsWrapper)}>
          <Group gap={8}>
            <ChatsIcon />
            <Text className={classes.chatsBlockTitle}>Chats</Text>
          </Group>
          <Divider opacity={"0.12"} color={"white"} />
          <Stack className={classes.chatsListContainer} gap={16} pr={16}>
            {mokeChats.map((chat) => (
              <Stack
                key={chat.id}
                className={clsx(classes.chatItemContainer, { [classes.activeChat]: chat.id === activeChat?.id })}
                gap={16}
                onClick={() => setActiveChat(chat)}
              >
                <Group className={classes.chatItemHeader} gap={8} align="start" wrap="nowrap">
                  <Avatar size={40} src={chat.img} />
                  <Stack className={classes.chatInfo} gap={0}>
                    <Text truncate="end" className={classes.chatName} title={chat.chatName}>
                      {chat.chatName}
                    </Text>
                    <Text truncate="end" className={classes.chatRole} title={chat.chatRole}>
                      {chat.chatRole}
                    </Text>
                  </Stack>
                  <Text className={classes.chatDate}>{chat.date}</Text>
                </Group>
                <Text className={classes.chatDescription} lineClamp={3} title={chat.description}>
                  {chat.description}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack gap={32} className={clsx(classes.chatWindow, classes.chatsWrapper)}>
          <Group gap={16}>
            <div className={classes.avatarWrapper}>
              <Avatar size={64} src={`${import.meta.env.BASE_URL}assets/support-avatar.png`} />
              {typeof activeChat?.isOnline === "boolean" && (
                <div className={clsx(classes.indicator, activeChat?.isOnline ? classes.online : classes.offline)} />
              )}
            </div>
            <Stack gap={4} h={"70%"}>
              <Text className={classes.chatSupportName}>Support</Text>
              <Text className={classes.online}>{activeChat?.isOnline && "Online"}</Text>
            </Stack>
          </Group>
          <Divider opacity={"0.12"} color={"white"} />
          <ScrollArea type="never" style={{ flex: 1 }}>
            <div className={classes.messagesWindow}>
              <p className={clsx(classes.message, classes.supportMessage)}>Hello Linh!</p>
              <p className={clsx(classes.message, classes.supportMessage)}>I really love your work great job 👌 </p>
              <Group className={classes.messageTimeWrapper} gap={4}>
                <ReadMessage />
                <Text className={classes.messageTimeText}>03:49PM</Text>
              </Group>
              <p className={clsx(classes.message, classes.userMessage)}>Hi Tom </p>
              <p className={clsx(classes.message, classes.userMessage)}>Thank you, I also love it</p>
              <Group className={classes.messageTimeWrapper} gap={4}>
                <UnreadMessage />
                <Text className={classes.messageTimeText}>03:55PM</Text>
              </Group>
            </div>
          </ScrollArea>
          <Group className={classes.inputMessageContainer} gap={16}>
            <Clip />
            <Divider orientation="vertical" color="white" opacity={0.12} />
            <TextInput className={classes.input} placeholder="Start a new message" />
            <ActionIcon className={classes.sendButton}>
              <SendIcon />
            </ActionIcon>
          </Group>
        </Stack>
      </Group>
    </Stack>
  );
};
