# Senior Frontend Developer Test

**Welcome to my test**

On this test, it was tried to achive an accurate layout implementation, animations and a usage of the framework and language that would help understand my current knowledge about the stack required.

In some cases, the solution provided was totally overkill (using Vuex, for example, or implementing a custom validation process for the form), but it was done with intent. 

I also tried to make the test usefull for myself to learn something new (why not, right?). In this case, I put some extra effort (and hours) in implementing all animations using only TailwindCSS and Transition tags, without any custom CSS on the `<style>` SFC tags. This was an interesting experiment, it is helpfull and easy to do some easy transitions like a fade-in/out effect, but other cases like a toggle on the height of the component was not that easy and required some customizations on the tailwindcss config file. Also, it is quite verbose in some situations, and may not be that handy.

Another interesting topic to explore was *custom directives*. *VueTheMask* is a small lib for masking fields, but it doesn't have a on/off switch or a wildcard to accept any value, and as I wanted to have a single input component to handle all validations and etc, it was needed to make the mask work conditionally, only when a `maskTemplate` is passed as `prop`. After some googling and search on github, I got some hints and could implement a solution for it.

Link to the results: http://educkf-dogandpony-frontend.surge.sh/

This link was generated using the cool Nuxt static build process (as an alternative to using the SSR and putting up a server or firebase project for it).

## What was required

To recreate the design and functionality of a generic office-listings page. Please navigate through the [interactive prototype](https://www.figma.com/proto/VU2BJHrMmoSEdQmMa1EbYP/Front-end-Test?node-id=451%3A336&viewport=767%2C416%2C0.5802898406982422&scaling=min-zoom) to better understand the scope and requirements.


## Tasks and status

1. Fork this repository (to jump-start your test) :heavy_check_mark:
1. Recreate [the design](https://www.figma.com/proto/VU2BJHrMmoSEdQmMa1EbYP/Front-end-Test?node-id=451%3A336&viewport=767%2C416%2C0.5802898406982422&scaling=min-zoom) using [Vue.js](https://vuejs.org/) and [TailwindCSS](https://tailwindcss.com/) :heavy_check_mark:
1. Populate the office listings from a datasource (JSON or hard-coded array)  :heavy_check_mark:
1. Recreate the following interactivity :heavy_check_mark:
    1. Toggle open/close office cards :heavy_check_mark:
    1. “Add new location” (add new office to list) :heavy_check_mark:
    1. “Edit office” (edit and save office data) :heavy_check_mark:
    1. While adding or editing an office, the “Save” button should be disabled until all fields have been validated :heavy_check_mark:
    1. “Delete office” (remove office from list) :heavy_check_mark:



