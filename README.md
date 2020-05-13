# A place for learning VueJS

Here is a learning repository for learning VueJS.

## Contents

- [A place for learning VueJS](#a-place-for-learning-vuejs)
  - [Contents](#contents)
  - [Standalone VueJS files](#standalone-vuejs-files)
  - [VueJS Projects](#vuejs-projects)
  - [vuejs-learning-topics](#vuejs-learning-topics)
  - [General VueJS Teaching Notes](#general-vuejs-teaching-notes)
  - [Events](#events)
    - [Form @submit.prevent](#form-submitprevent)

## [Standalone VueJS files](SingleHtmlFiles)

These standalone VueJS files are good for learning individual components of Vue because the file stands alone and there are no complex dependencies to inject into the project.  Good for learning.

## [VueJS Projects](StandaloneProjects)

These are built using the @vue/cli command line interface, and each one is a fully-fledged Vue project

## [vuejs-learning-topics](vuejs-learning-topics)

## [General VueJS Teaching Notes](https://github.com/philanderson888/course-notes)

For access to my teaching notes accompanying this code please refer to this general link at

https://github.com/philanderson888/course-notes


## Events

### Form @submit.prevent

Prevents default submission of a form

```html
<form @submit.prevent="validate"></form>
<script>
export default {
    data(){
        return
    },
    methods:{
        validate(){
            return false
        }
    }
}
```


Thank you 

Phil Anderson
