# NOTES

## NEW

- in Drawer.js  // TODO - Get Soundscape name and url from DB - Then use map to create buttons with names and urls
- FIX Loader styles
- FIX frequency and volume static  

- add track label accordian for 3 different tracks
- fix roundCorrect helper function - precision--
- Put loader in popup component // Style error msg
- remove Howl.js and add react-sound
- refactor context to single state object
- add sprites to aws 
- load db with real sprites urls
- create fetch for sprites or add relation to db to fetch all related sprites when fetching soundscape

- Add login admin panel for adding new soundscapes, environments and sprites.
        - refer to CH. 17 - Restful APIs - in Node/Postgres section

- Add list area that shows all available soundscapes, environments and sprites.
        - When adding a new soundscapes etc it updates th UI automatically

## TROUBLESHOOT

        - test is not accepting the AudioContext

## // TODO change to react-sound library - more control

  
## consider removing master volume - let master volume be controlled by device

## Create frequency controller for binaural

        - set volume controller in slider??
        - eventually create a volume reducer for all sliders

## Create a base timer that all tracks will sync to

        - Create a base timer that all tracks will sync to
        - Volume fades in and out as tracks transition

