window.onload = function(){
    let description = document.createElement('p');
    description.innerHTML = 'macOs keyboard, change language - shift + alt';
    document.body.appendChild(description);

    let layout = [
        [
        {type: 'general', primaryValueEng: '`', secondaryValueEng: '~', primaryValueRu: ']', secondaryValueRu: '[', code: '192'}, 
        {type: 'general', primaryValueEng: '1', secondaryValueEng: '!', primaryValueRu: '1', secondaryValueRu: '!', code: '49'},
        {type: 'general', primaryValueEng: '2', secondaryValueEng: '@', primaryValueRu: '2', secondaryValueRu: '"', code: '50'},
        {type: 'general', primaryValueEng: '3', secondaryValueEng: '#', primaryValueRu: '3', secondaryValueRu: '№', code: '51'},
        {type: 'general', primaryValueEng: '4', secondaryValueEng: '$', primaryValueRu: '4', secondaryValueRu: '%', code: '52'},
        {type: 'general', primaryValueEng: '5', secondaryValueEng: '%', primaryValueRu: '5', secondaryValueRu: ':', code: '53'},
        {type: 'general', primaryValueEng: '6', secondaryValueEng: '^', primaryValueRu: '6', secondaryValueRu: ',', code: '54'},
        {type: 'general', primaryValueEng: '7', secondaryValueEng: '&', primaryValueRu: '7', secondaryValueRu: '.', code: '55'},
        {type: 'general', primaryValueEng: '8', secondaryValueEng: '*', primaryValueRu: '8', secondaryValueRu: ';', code: '56'},
        {type: 'general', primaryValueEng: '9', secondaryValueEng: '(', primaryValueRu: '9', secondaryValueRu: '(', code: '57'},
        {type: 'general', primaryValueEng: '0', secondaryValueEng: ')', primaryValueRu: '0', secondaryValueRu: ')', code: '48'},
        {type: 'general', primaryValueEng: '-', secondaryValueEng: '_', primaryValueRu: '-', secondaryValueRu: '_', code: '189'},
        {type: 'general', primaryValueEng: '=', secondaryValueEng: '+', primaryValueRu: '+', secondaryValueRu: '+', code: '187'},
        {type: 'delete', code: '8'}
        ],
        [
        {type: 'general', primaryValueEng: '\t', secondaryValueEng: '\t', primaryValueRu: '\t', secondaryValueRu: '\t', className: 'tab', code: '9'},
        {type: 'general', primaryValueEng: 'q', secondaryValueEng: 'Q', primaryValueRu: 'й', secondaryValueRu: 'Й', code: '81'},
        {type: 'general', primaryValueEng: 'w', secondaryValueEng: 'W', primaryValueRu: 'ц', secondaryValueRu: 'Ц', code: '87'},
        {type: 'general', primaryValueEng: 'e', secondaryValueEng: 'E', primaryValueRu: 'у', secondaryValueRu: 'У', code: '69'},
        {type: 'general', primaryValueEng: 'r', secondaryValueEng: 'R', primaryValueRu: 'к', secondaryValueRu: 'К', code: '82'},
        {type: 'general', primaryValueEng: 't', secondaryValueEng: 'T', primaryValueRu: 'е', secondaryValueRu: 'Е', code: '84'},
        {type: 'general', primaryValueEng: 'y', secondaryValueEng: 'Y', primaryValueRu: 'н', secondaryValueRu: 'Н', code: '89'},
        {type: 'general', primaryValueEng: 'u', secondaryValueEng: 'U', primaryValueRu: 'г', secondaryValueRu: 'Г', code: '85'},
        {type: 'general', primaryValueEng: 'i', secondaryValueEng: 'I', primaryValueRu: 'ш', secondaryValueRu: 'Ш', code: '73'},
        {type: 'general', primaryValueEng: 'o', secondaryValueEng: 'O', primaryValueRu: 'щ', secondaryValueRu: 'Щ', code: '79'},
        {type: 'general', primaryValueEng: 'p', secondaryValueEng: 'P', primaryValueRu: 'з', secondaryValueRu: 'З', code: '80'},
        {type: 'general', primaryValueEng: '[', secondaryValueEng: '{', primaryValueRu: 'х', secondaryValueRu: 'Х', code: '219'},
        {type: 'general', primaryValueEng: ']', secondaryValueEng: '}', primaryValueRu: 'ъ', secondaryValueRu: 'Ъ', code: '221'},
        {type: 'general', primaryValueEng: '\\', secondaryValueEng: '|', primaryValueRu: 'ё', secondaryValueRu: 'Ё', code: '220'}
        ],
        [
        {type: 'capsLock', active: false, code: '20'},
        {type: 'general', primaryValueEng: 'a', secondaryValueEng: 'A', primaryValueRu: 'ф', secondaryValueRu: 'Ф', code: '65'},
        {type: 'general', primaryValueEng: 's', secondaryValueEng: 'S', primaryValueRu: 'ы', secondaryValueRu: 'Ы', code: '83'},
        {type: 'general', primaryValueEng: 'd', secondaryValueEng: 'D', primaryValueRu: 'в', secondaryValueRu: 'В', code: '68'},
        {type: 'general', primaryValueEng: 'f', secondaryValueEng: 'F', primaryValueRu: 'а', secondaryValueRu: 'А', code: '70'},
        {type: 'general', primaryValueEng: 'g', secondaryValueEng: 'G', primaryValueRu: 'п', secondaryValueRu: 'П', code: '71'},
        {type: 'general', primaryValueEng: 'h', secondaryValueEng: 'H', primaryValueRu: 'р', secondaryValueRu: 'Р', code: '72'},
        {type: 'general', primaryValueEng: 'j', secondaryValueEng: 'J', primaryValueRu: 'о', secondaryValueRu: 'О', code: '74'},
        {type: 'general', primaryValueEng: 'k', secondaryValueEng: 'K', primaryValueRu: 'л', secondaryValueRu: 'Л', code: '75'},
        {type: 'general', primaryValueEng: 'l', secondaryValueEng: 'L', primaryValueRu: 'д', secondaryValueRu: 'Д', code: '76'},
        {type: 'general', primaryValueEng: ';', secondaryValueEng: ':', primaryValueRu: 'ж', secondaryValueRu: 'Ж', code: '189'},
        {type: 'general', primaryValueEng: '\'', secondaryValueEng: '"', primaryValueRu: 'э', secondaryValueRu: 'Э', code: '222'},
        {type: 'general', primaryValueEng: '\n', secondaryValueEng: '\n', primaryValueRu: '\n', secondaryValueRu: '\n', className: 'enter', code: '13'},
        ],
        [{type: 'shift', active: false, code: '16'}, 
        {type: 'general', primaryValueEng: 'z', secondaryValueEng: 'Z', primaryValueRu: 'я', secondaryValueRu: 'Я', code: '90'},
        {type: 'general', primaryValueEng: 'x', secondaryValueEng: 'X', primaryValueRu: 'ч', secondaryValueRu: 'Ч', code: '88'},
        {type: 'general', primaryValueEng: 'c', secondaryValueEng: 'C', primaryValueRu: 'с', secondaryValueRu: 'С', code: '67'},
        {type: 'general', primaryValueEng: 'v', secondaryValueEng: 'V', primaryValueRu: 'м', secondaryValueRu: 'М', code: '86'},
        {type: 'general', primaryValueEng: 'b', secondaryValueEng: 'B', primaryValueRu: 'и', secondaryValueRu: 'И', code: '66'},
        {type: 'general', primaryValueEng: 'n', secondaryValueEng: 'N', primaryValueRu: 'т', secondaryValueRu: 'Т', code: '78'},
        {type: 'general', primaryValueEng: 'm', secondaryValueEng: 'M', primaryValueRu: 'ь', secondaryValueRu: 'Ь', code: '77'},
        {type: 'general', primaryValueEng: ',', secondaryValueEng: '<', primaryValueRu: 'б', secondaryValueRu: 'Б', code: '188'},
        {type: 'general', primaryValueEng: '.', secondaryValueEng: '>', primaryValueRu: 'ю', secondaryValueRu: 'Ю', code: '190'},
        {type: 'general', primaryValueEng: '/', secondaryValueEng: '?', primaryValueRu: '/', secondaryValueRu: '?', code: '191'},
        {type: 'topArrow', code: '38'},
        {type: 'shift', active: false, code: '16', className: 'right-shift'}
        ],
        [
            {type: 'control', code: '17'},
            {type: 'alt', code: '18'},
            {type: 'command', code: '91'},
            {type: 'general', primaryValueEng: ' ', secondaryValueEng: ' ', primaryValueRu: ' ', secondaryValueRu: ' ', className: 'space', code: '32'},
            {type: 'command', code: '93'},
            {type: 'alt', code: '18'},
            {type: 'leftArrow', code: '37'},

            {type: 'bottomArrow', code: '40'},
            {type: 'rightArrow', code: '39'}
        ]
    ];

    let textField = createTextField();
    textField.focus();
    createKey(layout, textField);
    let storage = window.localStorage;

    keyDownHandler(layout);
    keyUpHandler();

}

class Key {
    constructor(keyValue, language, textField) {
        this.keyValue = keyValue;
        this.language = language;
        this.textField = textField;
    }

    createKeyContainer(){
        this.container = document.createElement('div');
        this.container.classList.add('num' + this.keyValue.code)
        switch (this.keyValue.type) {
        case 'delete':
            this.createKeyNode('delete', 'delete');
            break;
        case 'shift': 
            this.createKeyNode('shift', 'shift');
            if ('className' in this.keyValue){
                this.container.classList.add(this.keyValue.className);
            }
            break;
        case 'capsLock': 
           this.createKeyNode('caps lock', 'caps-lock');
            break;
        case 'control':
            this.createKeyNode('control', 'control');
            break;
        case 'alt': 
           this.createKeyNode('alt', 'alt');
            break;
        case 'command': 
            this.createKeyNode('command', 'command');
            break;
        case 'leftArrow':
            this.createKeyNode('←', 'left-arrow');
            break;
        case 'rightArrow':
            this.createKeyNode('→', 'right-arrow');
            break;
        case 'topArrow':
            this.createKeyNode('↑', 'top-arrow');
            break;
        case 'bottomArrow':
            this.createKeyNode('↓', 'bottom-arrow');
            break;
        case 'general':
            let generalKeyRu = document.createElement('span');
            let generalKeyEng = document.createElement('span');
            let anotherGeneralKeyRu = document.createElement('span')
            let anotherGeneralKeyEng = document.createElement('span');
            if(this.keyValue.primaryValueRu === this.keyValue.secondaryValueRu.toLowerCase()){
                generalKeyRu.innerHTML = this.keyValue.primaryValueRu;
            }else{
                anotherGeneralKeyRu.innerHTML = this.keyValue.secondaryValueRu;
                generalKeyRu.innerHTML = this.keyValue.primaryValueRu;
                this.container.appendChild(anotherGeneralKeyRu);
            }
            if(this.keyValue.primaryValueEng === this.keyValue.secondaryValueEng.toLowerCase()){
                generalKeyEng.innerHTML = this.keyValue.primaryValueEng;
            }else{
                anotherGeneralKeyEng.innerHTML = this.keyValue.secondaryValueEng;
                generalKeyEng.innerHTML = this.keyValue.primaryValueEng;
                this.container.appendChild(anotherGeneralKeyEng);
            }

            this.container.appendChild(generalKeyRu);
            this.container.appendChild(generalKeyEng);


            this.container.classList.add('general');
            if('className' in this.keyValue && this.keyValue.className !== 'right-shift'){
                this.container.classList.add(this.keyValue.className);
                let content  = document.createElement('span');
                content.innerHTML = this.keyValue.className;
                this.container.appendChild(content);
            }
            if(this.language === 'ru'){
               generalKeyEng.classList.add('hidden');
               anotherGeneralKeyEng.classList.add('hidden');
            }
            if(this.language === 'eng'){
                generalKeyRu.classList.add('hidden');
                anotherGeneralKeyRu.classList.add('hidden');
            }
            break; 
        
        }


        this.container.addEventListener('mousedown',  () => {
            this.container.classList.add('clicked');
            this.onKeyHandler();
            this.textField.focus();
        });

        this.container.addEventListener('mouseup', () => {
            this.container.classList.remove('clicked');
            this.textField.focus();
        });

        return this.container;
    }
        
    onKeyHandler(){
        let currantCaretPosition = this.textField.selectionStart;
        let outputText =  this.textField.value;
        let shift = document.querySelector('.shift');

        switch (this.keyValue.type){
        case 'general':
            let capsLock = document.querySelector('.caps-lock')
            let charToInsert = '';
            this.language = window.localStorage.getItem('language');
            
            if(this.language === 'eng') {
                if(shift.classList.contains('active') || capsLock.classList.contains('active')){
                    charToInsert = this.keyValue.secondaryValueEng;
                } else {
                    charToInsert = this.keyValue.primaryValueEng;
                }
            } else {
                if(shift.classList.contains('active') || capsLock.classList.contains('active')){
                    charToInsert = this.keyValue.secondaryValueRu;
                } else {
                    charToInsert = this.keyValue.primaryValueRu;
                }
            }
            this.textField.value = outputText.substring(0, currantCaretPosition) + charToInsert + outputText.substring(this.textField.selectionEnd);
            currantCaretPosition += 1;
            this.textField.selectionStart = currantCaretPosition;
            this.textField.selectionEnd = currantCaretPosition;
            break;

        case 'shift':
            this.changeActiveState();
            break;

        case 'capsLock':
            this.changeActiveState();
            break;

        case 'delete': 
            this.textField.value = outputText.substring(0, currantCaretPosition - 1) + outputText.substring(currantCaretPosition);
            currantCaretPosition -= 1;
            this.textField.selectionStart = currantCaretPosition;
            this.textField.selectionEnd = currantCaretPosition;
            break;

        case 'rightArrow':
            this.textField.selectionStart = currantCaretPosition + 1;
            this.textField.selectionEnd = currantCaretPosition + 1;
            break;

        case 'leftArrow': 
            this.textField.selectionStart = currantCaretPosition - 1;
            this.textField.selectionEnd = currantCaretPosition - 1;
            break;

        case 'topArrow':
            if(outputText.substring(0, currantCaretPosition).lastIndexOf('\n', ) !== -1){
                this.textField.selectionStart = outputText.substring(0, currantCaretPosition).lastIndexOf('\n');
                this.textField.selectionEnd = outputText.substring(0, currantCaretPosition).lastIndexOf('\n');
                currantCaretPosition = this.textField.selectionStart;
            }
            break;
        
        case 'bottomArrow': 
        if(outputText.indexOf('\n', currantCaretPosition) !== -1){
            this.textField.selectionStart = outputText.indexOf('\n', currantCaretPosition) + 1;
            this.textField.selectionEnd = outputText.indexOf('\n', currantCaretPosition) + 1;
            currantCaretPosition = this.textField.selectionStart;
        }
            break;

        case 'alt': 
            let generalKeys = document.querySelectorAll('.general span');
            if( shift.classList.contains('active')){
                if(this.language === 'eng'){
                    this.language = 'ru';
                    window.localStorage.setItem('language', 'ru');
                    generalKeys.forEach((elem) => {
                        if(elem.classList.contains('hidden')){
                            elem.classList.remove('hidden');
                        }else{
                            elem.classList.add('hidden');
                        }
                    })
                } else {
                    this.language = 'eng';
                    window.localStorage.setItem('language', 'eng');
                    generalKeys.forEach((elem) => {
                        if(elem.classList.contains('hidden')){
                            elem.classList.remove('hidden');
                        }else{
                            elem.classList.add('hidden');
                        }
                    })
                }
            }
            break;
        }
    }
        
    changeActiveState(){
        if(this.keyValue.active === false) {
            this.keyValue.active = true;
            this.container.classList.add('active');
        } else {
            this.keyValue.active = false;
            if(this.container.classList.contains('active')) {
                this.container.classList.remove('active');
            }
        }
    }

    createKeyNode(name, className) {
        let key = document.createElement('p');
        this.container.classList.add(className);
        key.innerHTML = name;
        this.container.appendChild(key);
    }
    

    
    
}

const createKey = function(layout, textField){
    layout.forEach(element => {
        let line =  document.createElement('div');
        line.classList.add('line');
        document.body.appendChild(line);
        element.forEach(key => {
            let keyButton = new Key(key, window.localStorage.getItem('language'), textField);
            line.appendChild(keyButton.createKeyContainer());
        })        
    });
}


const createTextField = () => {
    let textField = document.createElement('textarea');
    textField.classList.add('text-field')
    document.body.appendChild(textField);
    return textField;
}

const keyDownHandler = (layout) => {
    document.addEventListener('keydown', (e) => {
        let keycode = e.keyCode;
        console.log(keycode);
        layout.forEach((elem) => {
            elem.forEach((key) => {
                if(key.code === keycode.toString()){
                    document.querySelector('.num' + `${key.code}`).classList.add('clicked');

                }
            })
        })
        document.querySelector('textarea').focus();
    })
}

const keyUpHandler = () => {
    document.addEventListener('keyup', () => document.querySelector('.clicked').classList.remove('clicked'));
    document.querySelector('textarea').focus();
}

