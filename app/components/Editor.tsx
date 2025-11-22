"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Block } from "@blocknote/core";

// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
  const getBlocks = () => {
    const blocks: Block[] = [];
    editor.forEachBlock((block) => {
      blocks.push(block);
      return false;
    });
    return blocks;
  }
//   const blocks = editor.forEachBlock((block) => {
//       console.log(block);
//       return false
//   });
  return (
    <div>
        <BlockNoteView editor={editor} />
        <button onClick={getBlocks}>shabang</button>
    </div>
  )
}