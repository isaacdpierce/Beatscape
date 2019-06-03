# NOTES

## Track timing

- Create a base timer that all tracks will sync to
- Volume fades in and out as tracks transition
  
## REFACTOR MACHINE

TopControls is it's own entity
    - PLACE it on grid

Tracks is its own entity
    - PLACE it on grid

DRAWER is being positioned relative and has z-index -1
    - remove position relative and PLACE on grid

 