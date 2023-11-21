/*
 * Error Illustration
 */
interface ErrorIllustrationProps {
  className?: string;
}

function ErrorIllustration(props: ErrorIllustrationProps) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 800 800">
      <path d="M524.56 573.73c5.36 1.39 10.68 3.07 15.88 5.31 1.29.59 2.6 1.12 3.87 1.79l1.92.96 1.89 1.06c2.52 1.44 4.97 3.09 7.27 5.15 2.28 2.04 4.5 4.46 6.04 7.64 1.52 3.15 2.14 7.18 1.25 10.8-.86 3.63-2.76 6.65-4.86 9.06-2.13 2.44-4.51 4.38-6.94 6.12-4.89 3.41-10.02 6.05-15.27 8.22-5.24 2.17-10.56 3.99-15.91 5.58-10.72 3.13-21.59 5.32-32.49 7.1-21.81 3.45-43.81 4.88-65.75 4.97-21.94-.01-43.89-1.31-65.56-4.53-1.09-.16-1.85-1.18-1.69-2.27.15-1.03 1.08-1.76 2.1-1.7 21.67 1.28 43.35 1.48 64.97.53 21.6-.92 43.16-2.91 64.34-6.56 10.59-1.82 21.07-4.12 31.27-7.11 5.1-1.47 10.11-3.16 14.95-5.13 4.81-2 9.52-4.18 13.62-6.92 2.03-1.37 3.92-2.87 5.42-4.5 1.55-1.6 2.63-3.33 3.12-5 .24-.84.35-1.67.25-2.52-.03-.85-.27-1.72-.63-2.61-.72-1.79-2.07-3.62-3.74-5.3-.8-.86-1.77-1.64-2.7-2.44-1.01-.74-1.97-1.54-3.05-2.23l-1.59-1.08-1.66-1.01c-1.09-.7-2.26-1.29-3.4-1.93-4.62-2.5-9.52-4.66-14.5-6.68h-.01c-1.28-.52-1.9-1.98-1.38-3.26.49-1.2 1.77-1.82 2.97-1.51zM289.9 629.45c-4.64-.94-9.21-2.31-13.66-4.17-4.47-1.83-8.82-4.2-12.84-7.51-1.97-1.71-3.89-3.65-5.45-6.1-1.55-2.43-2.67-5.5-2.76-8.73-.12-3.22.88-6.4 2.33-8.92 1.45-2.56 3.31-4.62 5.25-6.41 3.91-3.55 8.25-5.98 12.59-8.16 4.37-2.14 8.87-3.78 13.37-5.26 9.06-2.83 18.25-4.78 27.53-5.93 1.1-.14 2.1.64 2.24 1.74.12.98-.48 1.88-1.38 2.16h-.01c-8.78 2.79-17.5 5.58-25.84 9.03-2.09.84-4.15 1.73-6.17 2.67-2.01.95-4 1.95-5.93 2.99-3.84 2.09-7.48 4.49-10.38 7.23-1.44 1.37-2.63 2.85-3.46 4.31-.4.74-.72 1.47-.9 2.19-.22.72-.26 1.42-.26 2.13.02 1.4.47 2.85 1.33 4.36.89 1.49 2.13 2.97 3.56 4.37 2.93 2.79 6.52 5.3 10.31 7.62 3.81 2.29 7.81 4.43 11.87 6.62l.01.01c.98.53 1.35 1.76.82 2.74-.42.8-1.32 1.19-2.17 1.02zM507.05 541.12c16.76 1.33 33.48 3.5 50.07 6.7 8.29 1.61 16.55 3.43 24.74 5.67 8.18 2.22 16.34 4.7 24.32 7.83 4.01 1.51 7.95 3.26 11.87 5.08 3.89 1.9 7.76 3.92 11.5 6.25 3.73 2.36 7.35 5.02 10.72 8.18 3.34 3.16 6.46 6.88 8.6 11.5.59 1.11.93 2.39 1.36 3.6.22.61.3 1.28.45 1.91.11.65.3 1.28.34 1.95.3 2.64.17 5.34-.38 7.92-.58 2.57-1.6 4.95-2.79 7.15-1.29 2.11-2.7 4.12-4.34 5.81-3.2 3.49-6.89 6.17-10.71 8.39-3.84 2.21-7.86 3.94-12.03 5.16-1.08.32-2.22-.31-2.53-1.39-.23-.8.04-1.62.64-2.13l.02-.02c3.21-2.73 6.39-5.3 9.37-7.96 2.97-2.66 5.75-5.39 7.98-8.29 1.16-1.43 2.08-2.92 2.92-4.41.77-1.5 1.36-3.01 1.74-4.52.65-3.03.36-6.11-1.05-9.11-1.36-3.01-3.63-5.89-6.35-8.48-2.72-2.6-5.87-4.93-9.17-7.1-3.32-2.17-6.85-4.1-10.44-5.95-3.64-1.78-7.32-3.51-11.12-5.03-15.13-6.26-31.11-10.84-47.22-14.83-16.14-3.94-32.53-7.06-48.99-9.93h-.01c-1.09-.19-1.82-1.23-1.63-2.32.16-1 1.1-1.71 2.12-1.63z" />
      <path d="M484.22 666.39c-8.83.99-17.69 1.87-26.56 2.51-8.87.64-17.75 1.16-26.64 1.52-17.78.73-35.58.95-53.39.47-8.9-.22-17.8-.58-26.7-1.09-8.89-.53-17.78-1.23-26.66-2.09-17.75-1.69-35.47-4.08-53.05-7.42-8.79-1.68-17.55-3.58-26.25-5.8-8.7-2.23-17.35-4.74-25.87-7.81-8.52-3.06-16.94-6.57-25.04-11.05-4.05-2.24-8.01-4.74-11.77-7.69-1.88-1.47-3.71-3.05-5.44-4.82-1.73-1.75-3.38-3.65-4.83-5.8-1.45-2.14-2.71-4.51-3.59-7.11-.88-2.59-1.36-5.42-1.29-8.24.07-2.82.67-5.61 1.65-8.15.99-2.54 2.33-4.83 3.85-6.9 1.51-2.08 3.19-3.93 4.96-5.61 1.76-1.71 3.64-3.2 5.55-4.63 3.83-2.81 7.83-5.21 11.91-7.35 8.21-4.19 16.7-7.42 25.31-10.05 8.62-2.63 17.34-4.72 26.15-6.24 1.09-.19 2.13.54 2.32 1.64.17.98-.4 1.92-1.31 2.23h-.01c-8.34 2.94-16.65 5.85-24.73 9.17-4.06 1.62-8.03 3.4-11.96 5.22-3.92 1.84-7.75 3.81-11.42 5.97-3.69 2.12-7.23 4.43-10.46 6.99-1.6 1.28-3.14 2.62-4.53 4.03-1.42 1.39-2.7 2.86-3.76 4.4-1.07 1.53-1.96 3.1-2.58 4.7-.6 1.6-.92 3.21-.95 4.82-.1 3.21 1.06 6.47 3.13 9.54 1.02 1.54 2.27 3.01 3.66 4.41 1.37 1.41 2.89 2.74 4.5 4 3.2 2.54 6.75 4.8 10.45 6.87 7.41 4.13 15.39 7.51 23.54 10.47 16.34 5.88 33.39 10.21 50.59 13.67 8.61 1.72 17.28 3.22 25.98 4.55 8.7 1.35 17.43 2.5 26.18 3.49 8.75.99 17.53 1.83 26.32 2.51 8.79.7 17.6 1.27 26.41 1.7 8.81.44 17.64.69 26.47.89 8.83.19 17.66.26 26.5.17 8.83-.07 17.67-.29 26.5-.65 8.83-.37 17.66-.78 26.48-1.4 1.1-.08 2.06.75 2.14 1.85.09 1.05-.7 1.98-1.76 2.11zM213.13 670.18c-6.48-.63-12.87-1.77-19.21-3.15-6.35-1.35-12.62-3.06-18.83-5.02-6.2-1.96-12.32-4.23-18.27-6.93-2.98-1.33-5.9-2.83-8.76-4.41-2.86-1.59-5.67-3.3-8.34-5.23-.91-.66-1.11-1.93-.45-2.83.51-.71 1.39-.99 2.18-.77l.04.01c3.11.87 6.13 1.89 9.17 2.83l9.07 2.91 18.1 5.84 18.18 5.78c6.07 1.95 12.17 3.87 18.22 6.09h.01c1.31.48 1.98 1.93 1.5 3.23-.4 1.11-1.5 1.76-2.61 1.65zM685.42 641.91c-2.52 1.58-5.09 3.08-7.65 4.62l-1.93 1.13c-.65.36-1.32.67-1.99 1.01l-3.99 1.99c-5.28 2.81-10.82 4.94-16.31 7.24-1.37.59-2.77 1.09-4.16 1.58l-4.19 1.5-4.19 1.5c-1.4.5-2.79 1.01-4.21 1.43l-8.5 2.62-4.25 1.31c-1.42.4-2.85.78-4.29 1.15-5.74 1.46-11.44 3.1-17.24 4.26-5.78 1.26-11.54 2.6-17.37 3.59-5.81 1.07-11.61 2.21-17.45 3.07-5.83.92-11.66 1.9-17.51 2.6l-8.77 1.14-4.39.57c-1.46.18-2.93.31-4.4.46-5.87.57-11.73 1.2-17.6 1.71l-17.62 1.37-17.64 1.02c-23.53 1-47.08 1.29-70.58.26-1.1-.05-1.96-.98-1.91-2.09.05-1.04.87-1.86 1.89-1.91h.02c23.41-1.16 46.77-2.3 70.07-4.26l17.46-1.49 17.42-1.84c11.59-1.4 23.16-2.88 34.69-4.59 5.78-.76 11.51-1.83 17.26-2.73 5.76-.87 11.47-2.01 17.19-3.09 5.73-1.03 11.41-2.28 17.1-3.49 5.7-1.16 11.34-2.55 16.99-3.87l4.25-.98 4.21-1.1 8.43-2.18c1.42-.33 2.8-.75 4.19-1.16l4.17-1.23 4.17-1.23c1.39-.41 2.79-.79 4.15-1.28 11.04-3.53 21.88-7.53 32.55-12.14l.08-.03c1.02-.44 2.19.03 2.63 1.05.39.94.04 1.99-.78 2.51zM273.52 201.34c5.94 8.29 10.36 17.55 13.75 27.12 3.34 9.6 5.44 19.61 6.56 29.7 2.22 20.18.52 40.91-5.87 60.48-3.24 9.75-7.61 19.23-13.6 27.84-3.01 4.28-6.41 8.34-10.26 12.02-3.88 3.64-8.19 6.93-12.99 9.47-4.8 2.54-10.03 4.39-15.46 5.28-.67.14-1.36.22-2.04.28l-2.05.21c-1.37.09-2.75.1-4.12.12-1.37-.09-2.75-.1-4.11-.27-1.36-.2-2.73-.3-4.06-.63-5.37-1.07-10.49-3.07-15.14-5.73-4.67-2.64-8.86-5.95-12.62-9.61-3.78-3.64-7.11-7.67-10.08-11.91-2.98-4.23-5.61-8.69-7.87-13.3-4.54-9.22-7.9-18.95-10.16-28.91-2.28-9.96-3.48-20.15-3.65-30.35-.16-10.2.61-20.46 2.62-30.53 1-5.03 2.3-10.01 3.91-14.91 1.59-4.89 3.48-9.71 5.77-14.36 2.27-4.65 4.86-9.16 7.83-13.45 2.97-4.29 6.37-8.31 10.16-11.97 3.78-3.66 8.04-6.91 12.69-9.51 4.65-2.6 9.71-4.59 15-5.51 5.27-.95 10.7-.99 15.9-.03 5.21.96 10.16 2.9 14.6 5.53.95.56 1.27 1.79.7 2.75-.52.87-1.59 1.21-2.5.83h-.01c-4.38-1.85-8.97-3.03-13.57-3.41-2.3-.19-4.6-.22-6.88.05-2.28.18-4.52.61-6.72 1.17-1.1.27-2.17.68-3.25 1-1.05.44-2.12.82-3.15 1.3-2.06.95-4.08 2.01-5.99 3.26-3.84 2.48-7.34 5.5-10.54 8.84-3.2 3.35-6.02 7.08-8.57 11-2.56 3.92-4.8 8.07-6.76 12.37-1.94 4.3-3.69 8.71-5.09 13.24-1.42 4.53-2.59 9.14-3.58 13.8-3.76 18.67-4.03 38.26-.35 57.05.91 4.7 2.09 9.35 3.59 13.89 1.49 4.54 3.22 9 5.29 13.28 2.07 4.29 4.46 8.4 7.15 12.27 2.71 3.86 5.76 7.45 9.13 10.65 3.39 3.17 7.09 5.98 11.1 8.1 4.01 2.12 8.28 3.61 12.65 4.32 8.76 1.52 17.77-.42 25.51-4.85 3.89-2.19 7.52-4.95 10.8-8.13 3.31-3.15 6.32-6.69 9.01-10.49 5.45-7.57 9.61-16.17 12.75-25.14 1.57-4.49 2.9-9.07 3.95-13.74 1.04-4.66 1.91-9.38 2.45-14.15 1.13-9.52 1.42-19.2.7-28.8-.38-4.8-.92-9.59-1.81-14.33-.88-4.73-1.95-9.43-3.28-14.07-2.73-9.23-6.53-18.17-11.58-26.37l-.01-.02c-.72-1.18-.36-2.72.82-3.44 1.11-.67 2.57-.36 3.33.7zM296.1 382.91c4.31-.25 8.61-.3 12.92-.27 4.31.02 8.61.14 12.92.31 4.31.19 8.61.4 12.92.72 4.31.31 8.61.68 12.92 1.24 1.1.14 1.88 1.15 1.74 2.26-.12.93-.86 1.63-1.74 1.74-4.31.56-8.61.93-12.92 1.24-4.31.32-8.61.54-12.92.72-4.31.17-8.61.29-12.92.31-4.31.03-8.61-.02-12.92-.27-2.21-.13-3.9-2.02-3.77-4.23.12-2.05 1.76-3.66 3.77-3.77z" />
      <path d="M505.72 545.16c.25 13.16.15 26.33.12 39.46.01 6.56-.06 13.12.02 19.65v.31c0 .08-.01.33-.02.49-.02.36-.05.72-.09 1.07-.04.73-.27 1.37-.44 2.04-.4 1.29-.98 2.46-1.64 3.45-1.31 1.99-2.84 3.52-4.38 4.77-3.1 2.52-6.35 4.19-9.59 5.67-3.25 1.45-6.53 2.62-9.84 3.6-3.3 1-6.62 1.81-9.94 2.53-6.64 1.45-13.31 2.42-19.98 3.16-13.36 1.38-26.71 1.92-40.05 1.82-13.34-.13-26.69-.83-40.01-2.42-6.66-.79-13.3-1.88-19.93-3.27-6.62-1.43-13.23-3.15-19.78-5.76-3.28-1.31-6.54-2.83-9.77-5-1.61-1.05-3.24-2.38-4.79-4.07-.39-.46-.77-.89-1.14-1.39-.36-.55-.71-1.1-1.05-1.67-.31-.64-.6-1.33-.86-2-.22-.73-.38-1.54-.51-2.31-.32-3.54-.51-6.89-.6-10.26-.13-3.37-.12-6.71-.1-10.04.03-6.67.27-13.3.62-19.92.35-6.62.84-13.21 1.53-19.83.23-2.2 2.2-3.8 4.4-3.57 2.04.21 3.56 1.93 3.59 3.93l.55 39.31c.03 1.63.07 3.26.14 4.88.06 1.62.09 3.24.17 4.85.11 3.22.34 6.44.63 9.47.05.03.02.04.02.1.06.08.08.16.11.27.1.13.19.27.27.43.12.16.29.34.43.52.67.73 1.58 1.56 2.73 2.3 2.23 1.52 4.93 2.88 7.74 4.09 5.66 2.38 11.77 4.29 17.96 5.9 6.21 1.58 12.55 2.88 18.94 3.93 12.78 2.11 25.78 3.33 38.8 3.51 13.01.2 26.06-.46 38.86-2.38 6.4-.95 12.75-2.13 18.94-3.7 6.19-1.54 12.25-3.53 17.78-6.04 2.73-1.28 5.34-2.74 7.37-4.37 1.02-.81 1.81-1.68 2.32-2.43.26-.38.4-.71.49-.98 0-.13.12-.26.08-.36 0-.05.01-.1.02-.16 0-.05.02 0 .02-.13v-.31c.09-6.65.23-13.27.57-19.88.65-13.23 1.62-26.4 3.29-39.56.21-1.65 1.71-2.81 3.36-2.61 1.5.19 2.6 1.46 2.63 2.93l.01-.02zM501.89 456.27c3.23.99 6.43 2.14 9.57 3.58 1.57.72 3.13 1.51 4.67 2.39.77.43 1.53.93 2.29 1.4.75.53 1.5 1.03 2.22 1.63 1.46 1.14 2.86 2.52 4.13 4.13 1.25 1.63 2.34 3.69 2.78 6.07.05.3.12.59.15.89l.04.92.02.92c-.02.28-.06.54-.09.81l-.21 1.61c-.11.52-.27 1.03-.41 1.55-.25 1.06-.73 1.97-1.14 2.94-.45.93-1 1.77-1.54 2.63-2.29 3.27-5.13 5.74-8.06 7.85-2.94 2.11-6.02 3.78-9.14 5.29-6.25 3.01-12.7 5.18-19.19 7.04-12.99 3.69-26.22 5.79-39.46 7.24-13.25 1.41-26.55 1.95-39.82 1.99-13.28-.04-26.57-.62-39.82-2.02-13.24-1.42-26.47-3.53-39.47-7.21-6.49-1.85-12.96-4.01-19.2-7.1-3.12-1.55-6.19-3.28-9.13-5.43-2.9-2.18-5.76-4.74-7.88-8.27-.5-.91-1.04-1.78-1.39-2.8-.19-.5-.4-.98-.55-1.5l-.37-1.59c-.14-.53-.19-1.07-.22-1.62-.04-.55-.08-1.1-.09-1.64l.11-1.59c.07-.53.17-1.06.26-1.58.44-2.1 1.3-4.1 2.43-5.82 1.15-1.72 2.54-3.17 4.01-4.4 2.97-2.44 6.24-4.04 9.55-5.22 3.34-1.16 6.65-1.92 10.19-2.23 1.1-.1 2.08.72 2.17 1.83.08.92-.48 1.75-1.31 2.06l-.13.05c-5.8 2.12-11.77 4.92-15.67 8.84-.97.97-1.77 2.01-2.35 3.08-.6 1.06-.99 2.15-1.16 3.28l-.09.85-.01.87.09.82c.01.27.04.54.14.81.08.27.14.53.21.8.08.27.23.53.34.79.18.54.55 1.05.85 1.57 1.32 2.09 3.48 3.99 5.87 5.65 2.42 1.65 5.13 3.07 7.94 4.35 5.64 2.52 11.7 4.47 17.86 6.08 6.17 1.61 12.48 2.85 18.83 3.91 6.35 1.05 12.76 1.88 19.2 2.51 12.88 1.26 25.85 1.87 38.82 1.87 12.98.03 25.95-.52 38.83-1.74 6.44-.61 12.85-1.4 19.21-2.44 6.35-1.04 12.67-2.24 18.85-3.85 6.16-1.61 12.26-3.51 17.9-6.07 2.81-1.28 5.56-2.69 8-4.36 2.44-1.66 4.63-3.55 6.16-5.64 7.84-8.56-6.83-16.29-17.85-21.13l-.02-.01c-1.52-.67-2.21-2.44-1.54-3.96.61-1.42 2.18-2.12 3.62-1.68z" />
      <path d="M527.77 477.8c.28 7.27.45 14.49.59 21.75.08 7.26.2 14.51-.18 21.92-.09 1.86-.24 3.71-.47 5.69-.33 2.55-1.36 4.75-2.55 6.67-2.49 3.74-5.64 6.38-8.85 8.63-3.23 2.23-6.6 4.04-10.01 5.66-3.42 1.61-6.88 3.03-10.38 4.29-14 5.05-28.44 8.13-42.95 10.23-14.52 2.12-29.16 3.02-43.79 3.09-7.32-.01-14.63-.23-21.94-.68-7.31-.44-14.61-1.13-21.88-2.14-14.55-1.96-29.02-4.99-43.08-10.02-3.52-1.25-7-2.68-10.43-4.3-3.43-1.63-6.82-3.45-10.08-5.71-3.24-2.28-6.43-4.95-8.98-8.77-1.22-1.96-2.29-4.22-2.64-6.86-.12-1.06-.18-1.97-.27-2.96l-.13-2.82c-.12-3.72-.11-7.37-.04-11.02.06-3.64.2-7.27.38-10.89.33-7.25.81-14.45 1.49-21.68.15-1.65 1.62-2.87 3.27-2.71 1.54.14 2.7 1.43 2.72 2.94v.03l.27 21.55c.15 7.16.26 14.35.7 21.33l.21 2.58c.1.8.19 1.68.3 2.41.15.96.66 2.01 1.36 3.09 1.51 2.15 3.92 4.23 6.63 5.99 2.72 1.78 5.73 3.32 8.85 4.7 3.12 1.37 6.34 2.61 9.65 3.69 6.58 2.21 13.42 3.87 20.31 5.29 6.89 1.42 13.87 2.55 20.89 3.41 14.05 1.69 28.23 2.59 42.43 2.58 14.2.04 28.39-.72 42.47-2.3 7.03-.81 14.04-1.87 20.95-3.25 6.91-1.39 13.77-3.04 20.39-5.23 3.32-1.06 6.56-2.31 9.7-3.7 3.13-1.39 6.17-2.94 8.92-4.75 2.73-1.79 5.18-3.9 6.75-6.14.72-1.12 1.26-2.24 1.42-3.29.2-1.59.36-3.35.47-5.08.21-3.49.33-7.04.36-10.6.06-3.56.03-7.14-.04-10.72-.11-7.15-.4-14.35-.8-21.47v-.02c-.12-2.21 1.56-4.09 3.77-4.22 2.21-.12 4.09 1.56 4.22 3.77.02-.02.02.02.02.04zM227.55 141.26c8.32.39 16.63.66 24.95.79l6.24.09 3.12.04 3.34.16c4.45.32 8.9.99 13.15 2.31 4.26 1.25 8.43 2.86 12.31 4.98l1.47.76 1.42.85c.94.58 1.9 1.12 2.82 1.72 1.8 1.25 3.65 2.46 5.34 3.85 6.94 5.37 12.84 11.83 18.05 18.72 5.22 6.9 9.51 14.41 13.2 22.15 3.66 7.76 6.65 15.82 9.02 24.04 4.74 16.45 6.87 33.55 6.9 50.6-.12 17.04-2.27 34.12-6.98 50.57-2.38 8.21-5.37 16.26-9.04 24.01-3.69 7.74-7.99 15.23-13.22 22.11-5.2 6.88-11.16 13.27-18.1 18.59-1.69 1.38-3.53 2.57-5.33 3.81-.91.6-1.88 1.14-2.81 1.71l-1.41.84-1.47.75c-3.87 2.09-8.02 3.68-12.26 4.91-4.24 1.27-8.67 1.89-13.08 2.15l-3.31.1h-9.36c-4.16.01-8.32.07-12.47.15-4.16.05-8.32.19-12.47.35-2.21.09-4.07-1.63-4.16-3.84-.09-2.21 1.63-4.07 3.84-4.16h.32c4.16.17 8.32.3 12.47.35 4.16.07 8.32.14 12.47.15h9.36l2.92-.14c3.87-.3 7.73-.88 11.45-2.07 3.71-1.15 7.36-2.59 10.78-4.53l1.3-.69 1.25-.78c.83-.53 1.68-1.01 2.5-1.57 1.6-1.15 3.24-2.24 4.75-3.52 6.2-4.91 11.52-10.95 16.18-17.44 4.68-6.49 8.53-13.6 11.83-20.94 3.28-7.36 5.93-15.01 8.01-22.82 4.16-15.63 6.13-31.85 6.05-48.06-.02-16.21-2.01-32.42-6.13-48.04-2.08-7.81-4.74-15.45-8.03-22.8-3.3-7.33-7.16-14.43-11.85-20.9-4.65-6.49-10.03-12.45-16.23-17.31-1.51-1.27-3.15-2.35-4.75-3.49-.81-.55-1.66-1.03-2.49-1.55l-1.25-.77-1.29-.68c-3.41-1.91-7.04-3.33-10.73-4.45-3.7-1.14-7.54-1.67-11.37-1.91l-2.89-.08-3.12.04-6.24.09c-8.32.13-16.63.39-24.95.79-2.76.13-5.11-2-5.24-4.76-.13-2.76 2-5.11 4.76-5.24.14 0 .3 0 .46.01z" />
      <path d="M315.52 271.69c.21 7.05.05 14.11-.5 21.15-.53 7.04-1.46 14.06-2.83 21-2.69 13.89-6.94 27.59-13.43 40.38-3.23 6.39-6.99 12.57-11.38 18.34-4.39 5.76-9.38 11.17-15.12 15.83-5.75 4.62-12.22 8.52-19.24 11.27-1.73.75-3.57 1.23-5.36 1.81-.89.31-1.83.49-2.75.71l-2.77.63c-1.87.28-3.74.62-5.63.8l-2.84.2-1.42.1-1.42-.01c-1.89-.02-3.79.01-5.67-.22-.94-.09-1.89-.15-2.82-.28l-2.8-.45-1.4-.23-1.38-.32-2.76-.65c-.91-.23-1.8-.54-2.71-.81-.89-.3-1.81-.52-2.68-.88-7.07-2.57-13.66-6.24-19.59-10.64-5.95-4.41-11.14-9.66-15.79-15.26-4.63-5.62-8.66-11.66-12.15-17.95-6.96-12.62-11.76-26.2-14.93-40.05-1.58-6.93-2.7-13.95-3.45-20.99-.74-7.04-1.15-14.11-1.09-21.18-.07-7.06.14-14.13.76-21.18.66-7.05 1.69-14.07 3.14-21.02 2.88-13.89 7.45-27.53 14.07-40.26 3.31-6.36 7.14-12.5 11.55-18.24 4.41-5.75 9.43-11.1 15.12-15.77 5.68-4.67 12.01-8.69 18.91-11.64 6.92-2.89 14.38-4.67 21.96-5.1 3.84-.11 7.71.09 11.47.84 1.9.28 3.73.82 5.58 1.28.93.22 1.81.58 2.71.87.89.32 1.81.58 2.67.96 7.03 2.8 13.43 6.76 19.14 11.39 11.35 9.41 19.97 21.28 26.64 33.87 6.69 12.61 11.49 26.08 14.68 39.83 3.33 13.75 5.05 27.8 5.51 41.87zm-6.99.21c-.26-6.8-.82-13.59-1.72-20.33-.91-6.74-2.27-13.4-3.93-19.98-3.37-13.13-8.33-25.84-14.95-37.52-6.65-11.62-15.09-22.23-25.37-30.22-5.15-3.94-10.77-7.15-16.68-9.3-5.92-2.15-12.13-2.99-18.26-2.79-6.26.25-12.47 1.6-18.38 3.93-5.89 2.39-11.43 5.75-16.51 9.77-5.09 4.03-9.7 8.74-13.81 13.91-4.12 5.16-7.75 10.75-10.94 16.61-6.38 11.73-10.95 24.52-13.92 37.67-1.49 6.58-2.6 13.26-3.36 19.98-.7 6.73-1.08 13.51-1.06 20.29.1 6.78.64 13.55 1.5 20.25.87 6.71 2.09 13.36 3.74 19.9 3.33 13.05 8.25 25.68 14.96 37.16 6.66 11.48 15.26 21.81 25.64 29.49 5.2 3.81 10.85 6.91 16.81 9.04 5.96 2.14 12.24 3.13 18.51 3.15l1.18.02 1.17-.07 2.35-.14c1.56-.13 3.1-.41 4.66-.61l2.3-.51c.76-.17 1.54-.3 2.29-.56 1.5-.48 3.03-.84 4.49-1.46 5.93-2.17 11.54-5.35 16.66-9.28 10.3-7.86 18.62-18.53 25.04-30.21 6.44-11.72 11-24.56 13.91-37.77 1.42-6.61 2.52-13.32 3.07-20.08.56-6.75.76-13.55.61-20.34zM449.45 491.43c-9.2 1.41-18.48 2.29-27.76 2.85-4.64.3-9.3.49-13.95.58-4.65.12-9.31.14-13.97.11-9.32-.09-18.66-.48-28-1.31-4.67-.42-9.34-.95-14.02-1.64-4.67-.72-9.34-1.6-14.01-2.75-4.68-1.14-9.34-2.62-14.02-4.86-2.33-1.14-4.71-2.51-7.02-4.65-1.13-1.17-2.3-2.42-3.14-4.29-.46-.85-.71-1.95-.93-2.99-.05-.54-.08-1.09-.09-1.64v-.61l.01-.11.03-.43c.61-9.08.88-18.26 1.13-27.44l.28-13.79.2-13.81.34-27.65v-.03c.02-1.66 1.38-2.99 3.04-2.97 1.56.02 2.83 1.24 2.96 2.76 1.49 18.49 2.33 36.98 2.49 55.56.09 9.29-.04 18.58-.49 27.95l-.02.44v.11c0 .01.01.01.01.02l.02.02c.02.03.01.06-.01.09.1.07.01.14.14.29.07.27.5.75.96 1.24 1.09 1 2.72 2.05 4.54 2.91 3.65 1.75 7.85 3.07 12.1 4.24 4.27 1.15 8.67 2.07 13.11 2.88 4.43.83 8.92 1.52 13.43 2.11 9.02 1.19 18.13 1.98 27.27 2.52 18.29 1.05 36.67 1.18 55.01.28 1.1-.06 2.05.79 2.1 1.9.01 1.06-.74 1.95-1.74 2.11zM304.25 161.25c9.7.07 19.36.35 29.04.78 9.68.44 19.35 1.02 29.04 1.88 4.85.43 9.69.88 14.56 1.52 4.89.64 9.77 1.42 14.62 2.39 9.71 1.92 19.32 4.62 28.64 8.22 9.31 3.61 18.41 7.98 26.82 13.56 8.43 5.53 16.29 12.01 23.26 19.38 6.9 7.43 12.87 15.72 17.81 24.54 4.93 8.83 8.73 18.24 11.62 27.85.35 1.2.75 2.4 1.06 3.61l.93 3.64c.66 2.42 1.12 4.88 1.64 7.32.97 4.9 1.68 9.84 2.24 14.79.31 2.47.44 4.95.67 7.43.21 2.48.26 4.95.4 7.43.18 4.9.28 9.7.39 14.55.44 19.35.4 38.68.28 58-.11 19.33-.49 38.65-1.08 57.97-.29 9.66-.64 19.32-1.09 28.98l-.17 3.62-.08 1.81c0 .11-.03.4-.06.64l-.1.75c-.06.5-.23.96-.36 1.43-.61 1.86-1.68 3.31-2.78 4.47-1.12 1.16-2.3 2.01-3.5 2.78-2.4 1.45-4.84 2.44-7.3 3.18-2.45.75-4.92 1.26-7.42 1.52-1.12.12-2.12-.69-2.24-1.81-.09-.85.35-1.62 1.05-2.01l.03-.01c2.12-1.14 4.21-2.2 6.21-3.32 1.98-1.13 3.89-2.29 5.47-3.57.75-.65 1.48-1.29 1.97-1.93.51-.63.81-1.23.93-1.67 0-.11.08-.22.06-.32 0-.05 0-.1.01-.15 0-.05.02-.06.02-.26l.03-1.8.07-3.61c.18-9.62.27-19.25.29-28.88.06-19.26-.12-38.52-.39-57.78-.27-19.26-.79-38.51-1.36-57.74-.16-4.79-.31-9.64-.55-14.37-.16-2.34-.23-4.68-.46-7.01-.24-2.32-.4-4.66-.71-6.97-.58-4.63-1.3-9.24-2.25-13.79-.49-2.27-.91-4.56-1.52-6.79l-.86-3.37c-.29-1.12-.66-2.22-.98-3.33-2.67-8.85-6.14-17.44-10.62-25.46-4.48-8.01-9.89-15.46-16.09-22.2-6.23-6.71-13.28-12.66-20.93-17.79-7.65-5.13-15.91-9.4-24.51-12.93-8.61-3.51-17.58-6.27-26.72-8.43-4.57-1.07-9.2-1.96-13.85-2.72-4.67-.77-9.41-1.45-14.15-2.07-18.99-2.42-38.18-4.27-57.33-5.97h-.02c-1.65-.15-2.87-1.6-2.73-3.26.18-1.55 1.51-2.73 3.05-2.72z" />
      <path d="M276.01 272.32c-.01.27-.06.57-.16.85-.05.14-.11.28-.18.4l-.1.17-.06.11-.11.21-.22.41-.45.81c-.31.53-.62 1.06-.94 1.58-.65 1.03-1.33 2.04-2.03 3.03-1.41 1.98-2.95 3.88-4.56 5.71-3.28 3.63-6.92 6.99-11.04 9.82-2.05 1.43-4.19 2.76-6.45 3.88-2.25 1.14-4.59 2.17-7.02 2.98-4.83 1.67-10 2.47-15.14 2.61-5.14-.02-10.34-.69-15.25-2.25-2.46-.75-4.84-1.73-7.14-2.82-2.32-1.08-4.51-2.37-6.62-3.76-4.24-2.76-8.02-6.07-11.44-9.66-1.69-1.82-3.3-3.7-4.78-5.67-.74-.99-1.46-2-2.15-3.03-.34-.52-.67-1.05-1-1.59-.34-.55-.63-1.04-1-1.72-.75-1.33-.69-2.9 0-4.15.38-.67.67-1.16 1.01-1.72.33-.54.66-1.07 1-1.59.69-1.04 1.41-2.04 2.15-3.03 1.48-1.98 3.09-3.86 4.78-5.67 3.42-3.59 7.19-6.9 11.43-9.66 4.2-2.81 8.85-5.04 13.76-6.59 1.22-.42 2.48-.7 3.73-1.02 1.27-.23 2.53-.54 3.81-.69 2.55-.41 5.14-.51 7.71-.55 2.57.08 5.15.26 7.69.73 1.28.18 2.52.51 3.78.78 1.23.36 2.48.65 3.68 1.09 2.43.81 4.76 1.84 7.02 2.98 2.27 1.12 4.41 2.45 6.46 3.88 4.12 2.83 7.77 6.2 11.04 9.83 1.62 1.84 3.15 3.73 4.56 5.72.7.99 1.38 2 2.03 3.04.32.52.63 1.04.94 1.58l.45.81.22.41.11.21.06.11.1.17c.07.13.13.26.18.4.08.28.13.58.14.86zm-5 0c-.01.24.02.51.1.76.04.12.09.24.15.36.08.15.08.14.07.12l-.06-.08-.12-.15-.25-.32-.53-.63c-.36-.42-.72-.84-1.1-1.26-.73-.84-1.49-1.66-2.27-2.46-1.55-1.6-3.15-3.16-4.82-4.6-1.66-1.47-3.37-2.85-5.15-4.13-1.77-1.29-3.58-2.5-5.45-3.56-7.46-4.34-15.72-6.76-24.03-6.62-8.31.1-16.41 2.75-23.64 7.23-3.62 2.23-7.03 4.9-10.22 7.86-1.6 1.47-3.12 3.04-4.6 4.65-.74.8-1.45 1.63-2.15 2.46-.35.41-.7.83-1.03 1.25l-.92 1.19v-4.15l.92 1.19c.33.42.68.84 1.03 1.25.69.84 1.41 1.66 2.15 2.46 1.48 1.61 3 3.18 4.6 4.65 3.18 2.96 6.59 5.63 10.21 7.86 7.23 4.48 15.32 7.14 23.64 7.24 8.31.16 16.58-2.27 24.04-6.61 3.74-2.16 7.28-4.77 10.6-7.7 1.68-1.45 3.27-3.01 4.82-4.61.78-.8 1.53-1.62 2.26-2.46.37-.41.74-.84 1.09-1.26l.53-.64.25-.32.12-.15.06-.08c.01-.02.02-.03-.07.12-.06.11-.11.23-.15.36-.06.26-.09.53-.08.78z" />
      <path d="M244.54 272.13c.76 15.21-8.29 25.25-18.19 25.25-9.9 0-16.28-10.16-16.28-25.4 0-15.23 6.65-27.43 16.55-27.43s17.12 11.62 17.92 27.58zM439.7 132.79c2.5-5.53 5.86-10.82 10.61-15.29l1.83-1.64 2.01-1.49c.66-.52 1.41-.93 2.14-1.36.75-.42 1.47-.87 2.29-1.2.8-.34 1.59-.73 2.43-1.01l2.55-.77c.88-.18 1.76-.33 2.65-.48.89-.12 1.8-.14 2.7-.2 3.62-.08 7.2.65 10.44 1.9 3.24 1.26 6.17 3 8.78 5 2.63 1.99 4.92 4.28 6.99 6.69 1.03 1.22 1.99 2.48 2.9 3.77.45.66.88 1.32 1.31 1.99.42.71.8 1.33 1.23 2.17l-6.93.33c.39-.93.74-1.6 1.13-2.38.39-.74.8-1.47 1.22-2.19.84-1.44 1.8-2.81 2.78-4.17 2.03-2.68 4.34-5.21 7.05-7.42 2.69-2.22 5.79-4.15 9.27-5.43 3.46-1.3 7.31-1.9 11.05-1.64 3.76.24 7.33 1.32 10.54 2.82l2.35 1.22c.76.43 1.47.92 2.19 1.39l1.08.71c.35.25.67.52 1.01.78l1.97 1.59c5.08 4.38 9.02 9.55 12.21 15.03.7 1.2.29 2.75-.91 3.45-.99.58-2.21.4-3-.34l-.04-.04c-4.4-4.15-8.78-8.16-13.47-11.27-.6-.36-1.2-.71-1.78-1.08-.29-.18-.58-.38-.88-.54l-.91-.46c-.61-.29-1.19-.65-1.79-.92l-1.82-.75c-2.43-.91-4.86-1.46-7.25-1.53-4.77-.18-9.41 1.7-13.67 4.86-2.11 1.6-4.14 3.45-6.02 5.51-.95 1.02-1.85 2.1-2.74 3.2-.44.55-.87 1.11-1.29 1.67l-1.18 1.61-.74 1.02c-1.17 1.6-3.42 1.95-5.02.78-.53-.39-.92-.9-1.17-1.46l-1.3-1.42c-.45-.5-.92-.99-1.39-1.48-.95-.97-1.89-1.95-2.9-2.85-1.94-1.86-4.01-3.54-6.11-5.02-4.22-2.96-8.74-4.94-13.23-5.13-2.25-.12-4.53.22-6.8 1.02-.58.14-1.13.42-1.69.66-.56.24-1.15.45-1.69.79l-1.68.91-1.63 1.08c-4.41 2.91-8.38 6.98-12.34 11.22l-.02.03c-.76.82-2.04.86-2.86.1-.65-.63-.81-1.57-.46-2.34zM553.47 292.93c1.38-3.68 3.17-6.9 5.26-10.1 2.12-3.15 4.54-6.16 7.38-8.85 2.81-2.72 6.05-5.13 9.67-7.03 3.6-1.93 7.65-3.25 11.84-3.79 4.18-.55 8.49-.34 12.51.66 1.04.17 1.99.54 2.97.84.98.32 1.96.61 2.88 1.04l2.78 1.19c.9.44 1.76.94 2.62 1.42 6.93 3.89 12.58 9.18 17.21 15.03l-6.22.66c.99-1.6 1.93-3.23 3.01-4.79l1.72-2.29.87-1.14.97-1.08c.65-.72 1.31-1.44 1.98-2.14.71-.68 1.46-1.32 2.19-1.98l1.11-.98 1.21-.89c.82-.57 1.61-1.19 2.48-1.71 6.86-4.35 15.66-5.96 23.52-4.51 3.95.66 7.68 1.94 11.15 3.55 3.5 1.59 6.71 3.61 9.74 5.77 3 2.22 5.81 4.63 8.4 7.23 2.59 2.63 4.98 5.33 7.12 8.43.63.91.4 2.17-.51 2.8-.76.52-1.75.45-2.43-.11l-.08-.07c-5.25-4.38-10.88-8.52-16.7-11.82-5.81-3.34-11.96-5.85-18.08-6.73-3.06-.4-6.08-.3-8.98.26-.36.07-.73.12-1.09.21l-1.06.32c-.71.21-1.43.39-2.1.72-.68.3-1.39.52-2.06.87l-1.99 1.07c-5.21 3.15-9.7 7.93-13.67 13.3-.91 1.78-3.09 2.49-4.88 1.58-.17-.08-.32-.18-.47-.29l-.87-.64c-1.4-1.02-2.75-2.08-4.08-3.15l-4.1-2.97c-2.78-1.83-5.55-3.62-8.42-4.99-2.84-1.5-5.77-2.48-8.69-3.2-2.92-.74-5.87-.91-8.78-.68-2.92.25-5.81 1-8.64 2.17-2.83 1.18-5.55 2.83-8.18 4.74-2.6 1.95-5.12 4.15-7.46 6.59-1.19 1.21-2.31 2.48-3.44 3.77-1.09 1.28-2.21 2.68-3.17 3.95l-.11.14c-.84 1.11-2.41 1.32-3.52.48-.88-.67-1.19-1.85-.81-2.86zM101.73 461c.33-2.93 1.14-5.53 2.22-8.19 1.12-2.61 2.58-5.16 4.49-7.48 1.91-2.32 4.3-4.42 7.11-5.97 2.8-1.57 6.03-2.53 9.25-2.81 3.23-.32 6.4.11 9.34.86 2.98.72 5.66 1.95 8.24 3.26 5.05 2.76 9.4 6.27 13.14 10.22l-6.17 1.3c.38-.91.69-1.55 1.06-2.29.37-.71.76-1.4 1.17-2.09.82-1.36 1.73-2.67 2.71-3.94 1-1.25 2.05-2.48 3.22-3.63 1.16-1.15 2.44-2.21 3.76-3.22 2.7-1.98 5.83-3.57 9.22-4.47 3.38-.92 7-1.06 10.39-.51 3.41.51 6.57 1.74 9.39 3.3 1.45.74 2.75 1.64 4.06 2.52.68.42 1.23.96 1.85 1.44.6.5 1.22.97 1.79 1.48 4.57 4.12 8.3 8.85 11.39 13.88.44.71.21 1.65-.5 2.08-.58.36-1.31.27-1.8-.16l-.02-.02c-4.29-3.83-8.59-7.51-13.15-10.45-2.31-1.39-4.62-2.75-7-3.64-1.17-.53-2.39-.8-3.56-1.17l-1.77-.36c-.59-.1-1.18-.13-1.76-.2-4.66-.36-9.01 1.11-12.98 3.92-.98.72-1.95 1.48-2.86 2.34-.94.83-1.83 1.74-2.69 2.69-.86.95-1.72 1.93-2.5 2.97-.4.51-.8 1.03-1.17 1.56l-1.05 1.48-.09.12c-1.39 1.96-4.08 2.46-6.09 1.18-4.22-2.7-8.34-5.32-12.53-7.29-4.19-1.9-8.42-3.2-12.34-3.05-3.9.13-7.58 1.67-10.99 4.52-1.68 1.43-3.28 3.12-4.78 4.98-1.5 1.84-2.9 3.96-4.16 5.98l-.11.18c-.6.95-1.85 1.23-2.79.64-.68-.45-1.02-1.22-.94-1.96z" />
    </svg>
  );
}

export default ErrorIllustration;