import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// We need to include the base CSS in the root of
// the app so all of our components can inherit the styles
import { PlayCircleIconOutline, DocumentDuplicateIconOutline  } from '@neo4j-ndl/react/icons';

import { CodeBlock } from "@neo4j-ndl/react";
import "@neo4j-ndl/base/lib/neo4j-ds-styles.css";

export default function codeblockpage() {
  return (
    <>
      <Head>
        <title>A CodeBlock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.codeblockwrapper}>
          {Array.from(Array(100)).map((_, i) => (
        <CodeBlock
        key={i}
        className="basiccodeblock"
        actions={[
          {
            title: 'copy',
            'aria-label': 'copy',
            children: (
              <DocumentDuplicateIconOutline className="n-text-light-neutral-text-weak" />
            ),
            onClick: () => alert('copied'),
          },
          {
            title: 'run',
            'aria-label': 'run',
            children: <PlayCircleIconOutline className="n-text-primary-50" />,
            onClick: () => alert('run'),
          },
        ]}
        code = {`        <CodeBlock
        className="basiccodeblock"
        actions={[
          {
            title: 'copy',
            'aria-label': 'copy',
            children: (
              <DocumentDuplicateIconOutline className="n-text-light-neutral-text-weak" />
            ),
            onClick: () => alert('copied'),
          },
          {
            title: 'run',
            'aria-label': 'run',
            children: <PlayCircleIconOutline className="n-text-primary-50" />,
            onClick: () => alert('run'),
          },
        ]}
        code = {"firstdfdmkdfgnjfgnfjgnfjgnjnjijnhjkbhjlblhjbhjblk
second
third"}
        
        headerTitle="Header"
        language="typescript"
        maxHeight={320}
        showLineNumbers={true}
/>`}
        
        headerTitle="Header"
        language="typescript"
        maxHeight={320}
        showLineNumbers={true}
/>
          ))}
        </div>
      </main>
    </>
  )
}

