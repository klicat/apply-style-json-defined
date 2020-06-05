# apply-style-json-defined

#### This function applies styles dynamically with auto merge 

### Call function with styles passed as a Json
> You can pass all [css properties](https://www.w3schools.com/cssref)

### Example :

```
applyStyles({
  "myclass" : {
    "color" : "rgb(254, 254, 254)",
    "font-size": "12px"
},
  "myotherclass" : {
    "background-color" : "rgb(56, 60, 66)",
    "border-color" : "rgba(0, 0, 0, 0.51)"
 }
})
```
All tags with these classes (myclass & myotherclass) will be impacted.
