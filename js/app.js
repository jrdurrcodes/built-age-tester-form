/** 
 * Build an age tester
 * 
 * User inputs their date of birth
 * DOB gets tested to see if user is age 21 or older
 * 
 *      if user is age 21 or older, access is granted else access is denied
 * 
 * Send message to user displaying result
 * 
 * Checkbox must be checked before validation
 * 
 */

const submitBtn = document.getElementById('submitBtn')

class Tester {
    constructor() {
        this.displayText = document.getElementById('displayText')
        // this.dateOfBirth = document.getElementById('dateOfBirth')
    }

    init () {
        // console.log('clicked')
        this.getDateOfBirth()
    }   

    getDateOfBirth() {
    const dateOfBirth = document.getElementById('dateOfBirth').value
        // 1979-11-12

        // str.slice(startPos, limit)
        //parseInt(str)
        const birthYear  = parseInt(dateOfBirth.slice(0, 4))
        const birthMonth = parseInt(dateOfBirth.slice(5, 7))
        const birthDate  = parseInt(dateOfBirth.slice(8))  
        
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const date = today.getDate()
        // console.log(date)
        
        
        // console.log(birthDate, date)
        //run tests
        const yearTest = year - birthYear
        const monthTest = month - birthMonth
        const dateTest = date - birthDate
    
        let access

        let granted = 'Access Granted'
        let denied = ' Access Denied'

        const accessGranted = (access)=> {
            if  (access === 'granted')
                this.displayText.classList.remove('denied')
                this.displayText.classList.add('granted')
                this.displayText.innerText = granted
            }else if (access === 'denied')
                this.displayText.classList.remove('granted')
                this.displayText.classList.add('denied')
                this.displayText.innerText = denied
        }
        // function accessGranted
}

        const validate = document.getElementById('checkbox')
        
        if (validate.checked) {
            //test dates
            if(yearTest > 21)
                accessGranted('granted')
        }else if (yearTest ===21) {
            if(monthTest >= 0 )  {
                accessGranted('granted')
            }
        }else { 
            accessGranted()
        }
        }
        }

const action = new Tester()

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    action.init()
})