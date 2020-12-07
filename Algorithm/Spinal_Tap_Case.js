const test = ["This Is Spinal Tap",
                "thisIsSpinalTap",
                "TheAndyGriffith_Show",
                "Teletubbies say Eh-oh",
                "AllThe-small Things"]

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
  //  console.log(...str)

    const regex = /^[A-Z].*[a-z]$/g
    str.forEach(s => {
        
        let temp = s.replace(regex," a ");
        console.log({s ,temp})
    })

    return str;
  }
  
  spinalCase(test);