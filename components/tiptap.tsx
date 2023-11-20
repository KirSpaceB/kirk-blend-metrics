"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Heading1, Italic, List, ListOrdered } from "lucide-react";
import { Heading } from "lucide-react";
import { Quote } from "lucide-react";

import { Toggle } from "./ui";

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-1 rounded-sm rounded-br-lg border border-gray-300 p-3 py-2">
      <Toggle
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-5 w-5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-5 w-5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 1 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading className="h-5 w-5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading1 className="h-5 w-5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-5 w-5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-5 w-5" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-5 w-5" />
      </Toggle>
    </div>
  );
};

export const TipTap = ({
  content,
  onChange,
}: {
  content?: string;
  onChange?: (value: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "flex min-h-[224px] w-full resize-none rounded-[5px] border border-gray-300 bg-white px-[14px] py-2.5 text-base text-gray-black shadow-xs scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg placeholder:text-gray-500 focus:border-primary-300 focus:ring-2 focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-50",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col gap-y-4">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
