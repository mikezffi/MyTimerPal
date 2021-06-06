import openBooks from '../assets/animations/open-books.json'
//core
import boatHoldLegFluttlers from '../assets/animations/core/core-f-boat-hold-leg-flutters.json'
import cobra from '../assets/animations/core/core-f-cobra.json'
import deadbug from '../assets/animations/core/core-f-deadbug-fitness-exercise.json'
import crabToToe from '../assets/animations/core/core-m-crab-toe-touches.json'
import elbowToKnee from '../assets/animations/core/core-m-elbow-to-knee-crunch-right.json'
import plankLtoH from '../assets/animations/core/core-m-plank-low-to-high.json'
import russianTwist from '../assets/animations/core/core-m-russian-twists.json'
//lower-body
import bridge from '../assets/animations/lower-body/lowerbody-f-bridge.json'
import bulgarianSplitSquatJump from '../assets/animations/lower-body/lowerbody-f-bulgarian-split-squat-jump-right.json'
import jumpingLunges from '../assets/animations/lower-body/lowerbody-f-jumping-lunges.json'
import sideHipAbduction from '../assets/animations/lower-body/lowerbody-f-side-hip-abduction.json'
//upper-body
import spidermanPushUp from '../assets/animations/upper-body/upperbody-f-spiderman-push-up.json'
import widePushUp from '../assets/animations/upper-body/upperbody-f-wide-push-up.json'
import clapKnwwPushUp from '../assets/animations/upper-body/upperbody-m-clap-knee-push-up.json'
import crossKneeTricepExtension from '../assets/animations/upper-body/upperbody-m-cross-knee-tricep-extension.json'
import declineWidePushUp from '../assets/animations/upper-body/upperbody-m-decline-wide-push-up.json'

//IMGS

//core
import boatHoldLegFluttlersImg from '../assets/animations/core/core-f-boat-hold-leg-flutters.jpg'
import cobraImg from '../assets/animations/core/core-f-cobra.jpg'
import deadbugImg from '../assets/animations/core/core-f-deadbug-fitness-exercise.jpg'
import crabToToeImg from '../assets/animations/core/core-m-crab-toe-touches.jpg'
import elbowToKneeImg from '../assets/animations/core/core-m-elbow-to-knee-crunch-right.jpg'
import plankLtoHImg from '../assets/animations/core/core-m-plank-low-to-high.jpg'
import russianTwistImg from '../assets/animations/core/core-m-russian-twists.jpg'
//lower-body
import bridgeImg from '../assets/animations/lower-body/lowerbody-f-bridge.jpg'
import bulgarianSplitSquatJumpImg from '../assets/animations/lower-body/lowerbody-f-bulgarian-split-squat-jump-right.jpg'
import jumpingLungesImg from '../assets/animations/lower-body/lowerbody-f-jumping-lunges.jpg'
import sideHipAbductionImg from '../assets/animations/lower-body/lowerbody-f-side-hip-abduction.jpg'
//upper-body
import spidermanPushUpImg from '../assets/animations/upper-body/upperbody-f-spiderman-push-up.jpg'
import widePushUpImg from '../assets/animations/upper-body/upperbody-f-wide-push-up.jpg'
import clapKnwwPushUpImg from '../assets/animations/upper-body/upperbody-m-clap-knee-push-up.jpg'
import crossKneeTricepExtensionImg from '../assets/animations/upper-body/upperbody-m-cross-knee-tricep-extension.jpg'
import declineWidePushUpImg from '../assets/animations/upper-body/upperbody-m-decline-wide-push-up.jpg'

export const Animations = [
   {
      key: '0',
      text: "Label",
      uri: openBooks,
   },
   //core
   {
      key: '1',
      text: "Boat Hold Leg Fluttlers",
      uri: boatHoldLegFluttlers,
      img: boatHoldLegFluttlersImg
   },
   {
      key: '2',
      text: "Cobra",
      uri: cobra,
      img: cobraImg
   },
   {
      key: '3',
      text: "Deadbug",
      uri: deadbug,
      img: deadbugImg
   },
   {
      key: '4',
      text: "Crab to Toe",
      uri: crabToToe,
      img: crabToToeImg
   },
   {
      key: '5',
      text: "Elbow to Knee",
      uri: elbowToKnee,
      img: elbowToKneeImg
   },
   {
      key: '6',
      text: "Plank Low to High",
      uri: plankLtoH,
      img: plankLtoHImg
   },
   {
      key: '7',
      text: "Russian Twist",
      uri: russianTwist,
      img: russianTwistImg
   },
   //lower-body
   {
      key: '8',
      text: "Bridge",
      uri: bridge,
      img: bridgeImg
   },
   {
      key: '9',
      text: "Bulgarian Split Squat Jump",
      uri: bulgarianSplitSquatJump,
      img: bulgarianSplitSquatJumpImg
   },
   {
      key: '10',
      text: "Jumping Lunges",
      uri: jumpingLunges,
      img: jumpingLungesImg
   },
   {
      key: '11',
      text: "Side Hip Abduction",
      uri: sideHipAbduction,
      img: sideHipAbductionImg
   },
   //upper-body
   {
      key: '12',
      text: "Spiderman Push-up",
      uri: spidermanPushUp,
      img: spidermanPushUpImg
   },
   {
      key: '13',
      text: "Wide Push-up",
      uri: widePushUp,
      img: widePushUpImg
   },   
   {
      key: '14',
      text: "Clap Knee Push-up",
      uri: clapKnwwPushUp,
      img: clapKnwwPushUpImg
   },
   {
      key: '15',
      text: "Cross Knee Tricep Extension",
      uri: crossKneeTricepExtension,
      img: crossKneeTricepExtensionImg
   },
   {
      key: '16',
      text: "Declined Wide Push-up",
      uri: declineWidePushUp,
      img: declineWidePushUpImg
   },
]

export const SECTIONS = [
   {
      title: 'Core',
      data: [
         {
         key: Animations[1].key,
         text: Animations[1].text,
         uri: Animations[1].uri,
         img: Animations[1].img,
         },
         {
         key: Animations[2].key,
         text: Animations[2].text,
         uri: Animations[2].uri,
         img: Animations[2].img,
         },
         {
         key: Animations[3].key,
         text: Animations[3].text,
         uri: Animations[3].uri,
         img: Animations[3].img,
         },
         {
         key: Animations[4].key,
         text: Animations[4].text,
         uri: Animations[4].uri,
         img: Animations[4].img,
         },
         {
         key: Animations[5].key,
         text: Animations[5].text,
         uri: Animations[5].uri,
         img: Animations[5].img,
         },
         {
         key: Animations[6].key,
         text: Animations[6].text,
         uri: Animations[6].uri,
         img: Animations[6].img,
         },
         {
         key: Animations[7].key,
         text: Animations[7].text,
         uri: Animations[7].uri,
         img: Animations[7].img,
         },
      ],
   },
   {
      title: 'Lower body',
      data: [
         {
         key: Animations[8].key,
         text: Animations[8].text,
         uri: Animations[8].uri,
         img: Animations[8].img,
         },
         {
         key: Animations[9].key,
         text: Animations[9].text,
         uri: Animations[9].uri,
         img: Animations[9].img,
         },
         {
         key: Animations[10].key,
         text: Animations[10].text,
         uri: Animations[10].uri,
         img: Animations[10].img,
         },
         {
         key: Animations[11].key,
         text: Animations[11].text,
         uri: Animations[11].uri,
         img: Animations[11].img,
         },
      ],
   },
   {
      title: 'Upper body',
      data: [
         {
         key: Animations[12].key,
         text: Animations[12].text,
         uri: Animations[12].uri,
         img: Animations[12].img,
         },
         {
         key: Animations[13].key,
         text: Animations[13].text,
         uri: Animations[13].uri,
         img: Animations[13].img,
         },
         {
         key: Animations[14].key,
         text: Animations[14].text,
         uri: Animations[14].uri,
         img: Animations[14].img,
         },
         {
         key: Animations[15].key,
         text: Animations[15].text,
         uri: Animations[15].uri,
         img: Animations[15].img,
         },
         {
         key: Animations[16].key,
         text: Animations[16].text,
         uri: Animations[16].uri,
         img: Animations[16].img,
         },
      ],
   },
]