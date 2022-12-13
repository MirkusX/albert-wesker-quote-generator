import { useState } from "react";
import {
  QuoteH2,
  StyledButton,
  StyledDiv,
  StyledImg,
} from "../components/StyledComponents";
import albert_retarded from "../components/images/albert_retarded.jpg";
import albert1 from "../components/images/albert1.jpg";
import albert2 from "../components/images/albert2.jpg";
import albert3 from "../components/images/albert3.jpg";
import albert4 from "../components/images/albert4.jpg";
import albert5 from "../components/images/albert5.jpg";
import albert6 from "../components/images/albert6.jpg";
import albert7 from "../components/images/albert7.jpg";
import albert8 from "../components/images/albert8.jpg";
import albert9 from "../components/images/albert9.jpg";
import albert10 from "../components/images/albert10.jpg";
import albert11 from "../components/images/albert11.png";
import albert12 from "../components/images/albert12.jpg";
import albert13 from "../components/images/albert13.jpg";
import albert14 from "../components/images/albert14.jpg";
import albert15 from "../components/images/albert15.jpg";
import albert17 from "../components/images/albert17.jpg";
import albert18 from "../components/images/albert18.jpg";
//Array for quotes
const quotesArr = [
  "Isn't this one big family reunion?",
  "So slow to catch on...",
  "I think the odds are fair, two on two. Right, Jill?",
  "Seven minutes. Seven minutes is all I can spare to play with you.",
  "There's no point in hiding.",
  "Your future hinges upon this fight.",
  "You're merely postponing the inevitable!",
  "Your struggle is over!",
  "Poor deluded Chris. How you so love your precious self-righteousness.",
  "You can't hide forever!",
  "Incompetence surrounds me!",
  "Self-righteous fools!",
  "Poor performance, indeed.",
  "Ignorant cretins!",
  "I expected more of a challenge after all this time, Chris. How disappointing.",
  "Nice move, Chris. But now that your 'partner' has arrived, I'll leave you two to catch up.",
  "Remarkable! Still resisting at such an advanced stage. Commendable, yet futile!",
  "Have fun watching Jill suffer.",
  "So you've made it this far... Too bad you won't make it much further.",
  "Are you saying I was manufactured?",
  "The right to be a god. You? Arrogant even until the end. Only one truly capable of being a god, deserves that right. The right... With Uroboros, I have that right.",
  "Six billion cries of agony will birth a new balance. Unfortunately, it's too late for you. You will not live to see the dawn.",
  "Sorry, Excella, but it appears Uroboros has rejected you. Though you have been an excellent asset, I have one last task for you. Farewell, old friend.",
  "Uroboros is at the eve of its appearance!",
  "Let me clarify something for you, Chris. I don't think of myself as a king. No, I am a god! And even kings bow to gods!",
  "Don't you two ever tire of failing in your mission?",
  "You've really become quite an inconvenience for me.",
  "Every day, humans come one step closer to self-destruction. I'm not destroying the world, I'm saving it!",
  "Things are really getting interesting now, eh Chris? Do you actually think you can defeat me?",
  "[Laughs] Well then, I'll just have to kill you quickly.",
  "I'll see you dead.",
  "Has it never occurred to you that this planet is overpopulated? Only a handful of humans truly matter. Everyone else is just so much chaff. So now I have to separate this chaff from the wheat. And with Uroboros, I can finally accomplish this.",
  "In less than five minutes, we will reach the optimal altitude for missile deployment. Uroboros will be released into the atmosphere, ensuring complete global saturation.",
  "Only those with superior DNA will be chosen by Uroboros. Only those fit for survival will be allowed to carry their genes into a new age!",
  "It seems I may have underestimated you, Chris.",
  "I don't need anyone else. I have Uroboros!",
  "Your feeble attempts only delay the inevitable.",
  "The entire world will be infected. A new Genesis is at hand and I will be the creator!",
  "You'll pay for that!",
  "I'm taking the two of you with me!",
  "I should've killed you years ago... Chris.",
  "Over? I'm just getting started.",
  "Why can't you understand, Chris? Do you really believe the world is worth saving? Natural selection leaves the survivors stronger and better! Humans have escaped this winnowing for far too long!",
  "The human race requires judgment!",
  "War and pestilence wherever you go! Nothing but loathsome humans!",
  "I can't lose! Not to you!",
  "CHRIS!!!",
  "The plan is in its final stages. I will not tolerate delays.",
  "You haven't changed.",
  "Here I am offering you my precious time and you waste it by running around.",
  "The right to be a god... that right is now mine.",
  "Time to die, Chris!",
  "Ah, there you are!",
];
//Array for images
const imageArr = [
  albert_retarded,
  albert1,
  albert2,
  albert3,
  albert4,
  albert5,
  albert6,
  albert7,
  albert8,
  albert9,
  albert10,
  albert11,
  albert12,
  albert13,
  albert14,
  albert15,
  albert17,
  albert18,
];

export const RenderQuote = () => {
  const [quote, GetQuote] = useState("");
  const [image, GetImage] = useState("");

  return (
    <>
      <StyledImg src={image}></StyledImg>
      <QuoteH2>{quote}</QuoteH2>
      <StyledButton
        //Randomizes images and quote from array on click
        onClick={() => {
          GetQuote(
            quotesArr[Math.floor(Math.random() * quotesArr.length)],
            GetImage(imageArr[Math.floor(Math.random() * imageArr.length)])
          );
        }}
      >
        Generate Quote
      </StyledButton>
    </>
  );
};
