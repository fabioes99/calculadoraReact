import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import './styles.css';

const HoverCardDemo = () => (
  <HoverCard.Root>
    <HoverCard.Trigger className="Trigger" asChild>
      <a
        className="ImageTrigger"
        href="https://github.com/fabioes99"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="Image normal"
          src="https://avatars.githubusercontent.com/u/59034232?v=4"
          alt="GITHub"
        />
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <img
            className="Image large"
            src="https://avatars.githubusercontent.com/u/59034232?v=4"
            alt="GITHub"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            <div>
              <div className="Text">@fabioes99</div>
            </div>
            <div className="Text">
              Esta calculador usa pontos flutuantes para separar o inteiro do resto o . ao inves de usar a , como e comumente utilizado no Brasil.
            </div>
           
          </div>
        </div>

        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardDemo;