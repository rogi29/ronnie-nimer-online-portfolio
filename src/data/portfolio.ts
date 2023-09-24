import { ElementTag, type ElementMetadata } from "../types/ElementMetadata";
import gallery from "./gallery";

export default [
  {
    tag: ElementTag.H1,
    textContent: "PORTFOLIO",
  },
  {
    tag: ElementTag.H2,
    textContent: "Character Concept Art",
  },
  {
    tag: ElementTag.H3,
    textContent: "Under Strange Suns",
  },
  {
    ...gallery[0],
  },
  {
    tag: ElementTag.P,
    textContent:
      "A weary hero roams a bizarre world.\nHot stars hang heavy over a scorched landscape where darkness never arrives.",
  },
  {
    ...gallery[1],
  },
  {
    ...gallery[2],
  },
  {
    tag: ElementTag.H3,
    textContent: "The Ambrosian Kingdom",
  },
  {
    tag: ElementTag.H4,
    textContent: "Character Design",
  },
  {
    ...gallery[3],
  },
  {
    tag: ElementTag.P,
    textContent: "The famous knight and his two mercenaries.",
  },
  {
    ...gallery[4],
  },
  {
    tag: ElementTag.H4,
    textContent: "Armor Design",
  },
  {
    ...gallery[5],
  },
  {
    tag: ElementTag.P,
    textContent:
      "The Ambrosian People find the curvature of the armor aesthetically pleasing.\nTherefore, it is usually accentuated or exaggerated on Ambrosian armors.",
  },
  {
    ...gallery[6],
  },
  {
    ...gallery[7],
  },
  {
    tag: ElementTag.H3,
    textContent: "The Two-Headed Gnome",
  },
  {
    tag: ElementTag.H4,
    textContent: "Stylized Version",
  },
  {
    ...gallery[8],
  },
  {
    tag: ElementTag.P,
    textContent:
      "Meet Humphrey and Trummfy, the two-headed Gnome.\nHumphrey is the one who is constantly in a good mood, kind and optimistic.\nTrummfy is the grumpy one, who enjoys reading despite being nearly blind, which makes him even more moody.\nPumpkin is their favorite delicacy. They enjoy traveling and solving difficult puzzles, making them excellent companions on adventures.",
  },
  {
    ...gallery[9],
  },
  {
    ...gallery[10],
  },
  {
    tag: ElementTag.H4,
    textContent: "Game Production",
  },
  {
    ...gallery[11],
  },
  {
    tag: ElementTag.P,
    textContent:
      "Using Blender & Zbrush I managed to solve many design issues.",
  },
  {
    ...gallery[12],
  },
  {
    ...gallery[13],
  },
  {
    tag: ElementTag.P,
    textContent: "Final Design",
  },
] satisfies ElementMetadata[];
