import { StaticImageData } from "next/image";
import soccerBallIcon from "@/assets/img/soccerBall.png";

type LeftbarSectionsType = {
    id: string,
    name: string,
    image: StaticImageData,
}

export const leftbarSections: LeftbarSectionsType[] = [
    {
        id: "football",
        name: "Футбол",
        image: soccerBallIcon
    },
]