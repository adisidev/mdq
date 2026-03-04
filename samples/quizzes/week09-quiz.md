# Week 09 Quiz: Interaction and Virtual Environments (14 Questions)

---

## VE Foundations: Model-Based vs Image-Based

time_limit: 30

You are building a virtual tour of a real heritage building for a museum. Visitors should be able to walk freely around the space and inspect architectural details from any angle.

**Which approach is most appropriate?**

A. Model-based, create a full 3D mesh of the building so visitors can explore freely
B. Image-based, use a set of 360-degree photographs stitched into a panoramic tour
C. Either approach works equally well for this use case
D. Neither approach can support free exploration of a real building

> Correct Answer: A. Model-based, create a full 3D mesh of the building so visitors can explore freely
> Overall Feedback: Model-based environments support free movement and viewing from arbitrary positions, which matches the requirement for angle-by-angle inspection.

---

## VE Foundations: Image-Based Trade-Off

A startup wants to quickly prototype a VR relaxation app featuring real-world nature scenes. They have limited 3D modelling expertise but access to a 360-degree camera.

**What is the main trade-off of choosing an image-based approach?**

A. Faster to produce, but users are limited to fixed viewpoints
B. Slower to produce, but users get full 6-DOF movement
C. The images will not work inside an HMD
D. Image-based scenes cannot include any audio

> Correct Answer: A. Faster to produce, but users are limited to fixed viewpoints
> Overall Feedback: Image-based pipelines are fast to capture and publish, but movement is typically constrained to predefined viewpoints.

---

## Interaction Concepts: Natural vs Artificial

Consider these two VR locomotion methods: (A) the user physically walks in a tracked space to move, and (B) the user pushes a thumbstick on a controller to glide forward.

**How would you classify them on the natural-to-artificial spectrum?**

A. A is natural, B is artificial
B. A is artificial, B is natural
C. Both are natural since they both move the user
D. Both are artificial since neither is "real" movement

> Correct Answer: A. A is natural, B is artificial
> Overall Feedback: Physical walking maps directly to real-world movement patterns, while thumbstick gliding is an abstract control mapping.

---

## Hardware and Interaction: Bare-Hand Manipulation

time_limit: 25

A design team wants users to pick up and inspect virtual pottery using their bare hands in VR, with no controllers.

**Which hardware capability is most essential to enable this interaction?**

A. High-resolution display panels
B. Hand tracking with finger-level skeletal data
C. Eye tracking for foveated rendering
D. Spatial audio with head-related transfer functions

> Correct Answer: B. Hand tracking with finger-level skeletal data
> Overall Feedback: Bare-hand object manipulation depends on accurate hand and finger tracking. Display and audio quality help immersion, but they do not provide hand input.

---

## Presence: Plausibility Illusion

In SUPERHOT VR, time only moves when the player physically moves. The mechanic is unrealistic, yet players report high immersion.

**Which concept best explains why this artificial interaction can still feel immersive?**

A. Place illusion, the virtual space feels like a real location
B. Plausibility illusion, the scenario responds consistently to the player, creating the illusion that events are really happening
C. Cybersickness, unrealistic motion always reduces immersion
D. Fidelity, higher polygon counts increase presence

> Correct Answer: B. Plausibility illusion, the scenario responds consistently to the player, creating the illusion that events are really happening
> Overall Feedback: Plausibility is about how coherent and responsive the world feels. Even unrealistic mechanics can feel convincing when interaction-response logic is consistent.

---

## Interaction Design: Fire-Safety Training

You are designing a VR fire-safety training simulation. Trainees should learn to use a fire extinguisher.

**Which interaction approach best balances authenticity with practical design?**

A. Teleport the trainee to a safe zone when they point at a fire, fast but skips the learning
B. Let the trainee grab a virtual extinguisher, aim the nozzle, and squeeze the trigger with tracked hand/controller gestures
C. Play a pre-recorded video of someone using an extinguisher
D. Use a menu button to activate extinguisher automatically at the fire location

> Correct Answer: B. Let the trainee grab a virtual extinguisher, aim the nozzle, and squeeze the trigger with tracked hand/controller gestures
> Overall Feedback: Training outcomes improve when interaction mirrors real procedural steps, while still being implementable with current tracking and controller inputs.

---

## Embodiment: Virtual Threat Avoidance

In a VR experiment, many users tend to route their hands around a virtual saw blade when asked to place their hands in a target position.

**What is the primary reason for this behavior?**

A. Limited field of view in the VR HMD affecting depth perception
B. Hyper-realistic appearance of the virtual saw blade
C. Difficulty in accurately perceiving the virtual saw blade's position
D. High degree of embodiment via realistic hand representation and precise hand tracking

> Correct Answer: D. High degree of embodiment via realistic hand representation and precise hand tracking
> Overall Feedback: When users strongly embody a virtual hand, threats near that hand can trigger avoidance behavior even when users know the threat is virtual.

---

## Locomotion Selection: Action-Adventure Context

time_limit: 35

As lead developer for a VR action-adventure game, players will engage in quests across varying terrain (dense forests, steep mountains). Movement needs to be intuitive, near-realistic, and encourage sustained play without disorientation.

**What locomotion technique should you integrate?**

A. Teleportation
B. Joystick-based continuous locomotion
C. Walking-in-place with KatVR 360 slidemill
D. Walking-in-place with HTC Vive HMD and trackers
E. Tracking real movement in physical space

> Correct Answer: C. Walking-in-place with KatVR 360 slidemill
> Overall Feedback: This option balances natural movement cues with practical support for long-distance traversal and reduced disorientation compared with joystick-only movement.

---

## Locomotion Comfort: Long-Distance Traversal

You are tasked to build a VR game where users roam freely in a vast open world. Distances between points of interest are 10 to 20 kilometres. Cybersickness is the most important concern, and augmentation of movement speeds is known to induce more symptoms.

**Which locomotion technique is best suited for this constraint?**

A. Teleportation
B. Joystick-based continuous locomotion
C. Walking-in-place with KatVR 360 slidemill
D. Walking-in-place with HTC Vive HMD and trackers
E. Tracking real movement in physical space

> Correct Answer: A. Teleportation
> Overall Feedback: Teleportation generally minimizes vection-related discomfort and is a strong comfort-first choice for large virtual distances.

---

## Babylon.js Pattern: Actions

You want to create a button in a Babylon.js scene that, when touched, makes a door open with a creaking sound.

**Which implementation pattern is the most straightforward?**

A. Behaviours, attach a built-in drag or follow behaviour to the door
B. Actions, register an OnPickTrigger on the button with an ExecuteCodeAction
C. Observables, create a custom Observable and notify observers when the button is pressed

> Correct Answer: B. Actions, register an OnPickTrigger on the button with an ExecuteCodeAction
> Overall Feedback: Actions are ideal for direct trigger-response interactions such as button press to scripted outcome.

---

## Babylon.js Pattern: Behaviours

In your VR lab simulation, users need to pick up beakers and drag them across a table surface.

**Which Babylon.js interaction pattern is the most straightforward?**

A. Behaviours, attach a SixDofDragBehavior to the beaker mesh
B. Actions, register an OnPickTrigger with an ExecuteCodeAction that moves the beaker
C. Observables, add an observer to onBeforeRenderObservable that tracks pointer position and repositions the beaker each frame

> Correct Answer: A. Behaviours, attach a SixDofDragBehavior to the beaker mesh
> Overall Feedback: Built-in drag behaviours handle common 3D manipulation patterns with less custom per-frame logic.

---

## Babylon.js Pattern: Observables

You are building a VR physics playground. Whenever a ball's distance from the origin changes, a HUD display should update to show the current distance. The distance check must run every frame.

**Which pattern is most appropriate?**

A. Behaviours, attach a built-in behaviour to the ball that tracks distance
B. Actions, register an OnIntersectionEnterTrigger on invisible spheres at fixed distances
C. Observables, add an observer to scene.onBeforeRenderObservable that computes distance each frame and notifies a custom Observable

> Correct Answer: C. Observables, add an observer to scene.onBeforeRenderObservable that computes distance each frame and notifies a custom Observable
> Overall Feedback: Per-frame monitoring and event fan-out align naturally with the Observable pattern.

---

## Babylon.js Teleportation: timeToTeleport

Consider the following Babylon.js code:

```javascript
const teleportation = featureManager.enableFeature(
  WebXRFeatureName.TELEPORTATION, "stable", {
    xrInput: xr.input,
    floorMeshes: [ground],
    timeToTeleport: 2000,
    useMainComponentOnly: true,
  }, true, true
);
teleportation.parabolicRayEnabled = true;
```

**What does `timeToTeleport` control?**

A. The duration of the teleportation animation
B. The maximum time to complete the teleportation
C. The minimum delay between each teleportation trigger
D. The time to hold the button before teleportation triggers

> Correct Answer: D. The time to hold the button before teleportation triggers
> Overall Feedback: `timeToTeleport` configures the hold-to-teleport delay. It is not the travel animation duration.

---

## GUI in VR: Maintenance Training Scenario

You are building a VR training simulation for aircraft maintenance engineers with a quizzing system to evaluate their performance. The immersion goal is realistic training.

**What GUI implementation is best suited?**

A. Diegetic GUI on a virtual clipboard and pen, mirroring real maintenance checklists
B. GUI on a floating holographic panel anchored in the virtual workspace
C. Real-world quiz on real paper, take off the HMD when interacting

> Correct Answer: A. Diegetic GUI on a virtual clipboard and pen, mirroring real maintenance checklists
> Overall Feedback: A diegetic interface aligns the UI with the training context, supporting authenticity and continuity of immersion.

---
