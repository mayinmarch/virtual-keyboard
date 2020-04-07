window.onload = function(){
    let layout = [
        [
        {type: 'general', primaryValueEng: '`', secondaryValueEng: '~', primaryValueRu: ']', secondaryValueRu: '['}, 
        {type: 'general', primaryValueEng: '1', secondaryValueEng: '!', primaryValueRu: '1', secondaryValueRu: '!'},
        {type: 'general', primaryValueEng: '2', secondaryValueEng: '@', primaryValueRu: '2', secondaryValueRu: '"'},
        {type: 'general', primaryValueEng: '3', secondaryValueEng: '#', primaryValueRu: '3', secondaryValueRu: '№'},
        {type: 'general', primaryValueEng: '4', secondaryValueEng: '$', primaryValueRu: '4', secondaryValueRu: '%'},
        {type: 'general', primaryValueEng: '5', secondaryValueEng: '%', primaryValueRu: '5', secondaryValueRu: ':'},
        {type: 'general', primaryValueEng: '6', secondaryValueEng: '^', primaryValueRu: '6', secondaryValueRu: ','},
        {type: 'general', primaryValueEng: '7', secondaryValueEng: '&', primaryValueRu: '7', secondaryValueRu: '.'},
        {type: 'general', primaryValueEng: '8', secondaryValueEng: '*', primaryValueRu: '8', secondaryValueRu: ';'},
        {type: 'general', primaryValueEng: '9', secondaryValueEng: '(', primaryValueRu: '9', secondaryValueRu: '('},
        {type: 'general', primaryValueEng: '0', secondaryValueEng: ')', primaryValueRu: '0', secondaryValueRu: ')'},
        {type: 'general', primaryValueEng: '-', secondaryValueEng: '_', primaryValueRu: '-', secondaryValueRu: '_'},
        {type: 'general', primaryValueEng: '=', secondaryValueEng: '+', primaryValueRu: '+', secondaryValueRu: '+'},
        {type: 'delete'}
        ],
        [
        {type: 'general', primaryValueEng: '/t', secondaryValueEng: '/t', primaryValueRu: '/t', secondaryValueRu: '/t', className: 'tab'},
        {type: 'general', primaryValueEng: 'q', secondaryValueEng: 'Q', primaryValueRu: 'й', secondaryValueRu: 'Й'},
        {type: 'general', primaryValueEng: 'w', secondaryValueEng: 'W', primaryValueRu: 'ц', secondaryValueRu: 'Ц'},
        {type: 'general', primaryValueEng: 'e', secondaryValueEng: 'E', primaryValueRu: 'у', secondaryValueRu: 'У'},
        {type: 'general', primaryValueEng: 'r', secondaryValueEng: 'R', primaryValueRu: 'к', secondaryValueRu: 'К'},
        {type: 'general', primaryValueEng: 't', secondaryValueEng: 'T', primaryValueRu: 'е', secondaryValueRu: 'Е'},
        {type: 'general', primaryValueEng: 'y', secondaryValueEng: 'Y', primaryValueRu: 'н', secondaryValueRu: 'Н'},
        {type: 'general', primaryValueEng: 'u', secondaryValueEng: 'U', primaryValueRu: 'г', secondaryValueRu: 'Г'},
        {type: 'general', primaryValueEng: 'i', secondaryValueEng: 'I', primaryValueRu: 'ш', secondaryValueRu: 'Ш'},
        {type: 'general', primaryValueEng: 'o', secondaryValueEng: 'O', primaryValueRu: 'щ', secondaryValueRu: 'Щ'},
        {type: 'general', primaryValueEng: 'p', secondaryValueEng: 'P', primaryValueRu: 'з', secondaryValueRu: 'З'},
        {type: 'general', primaryValueEng: '[', secondaryValueEng: '{', primaryValueRu: 'х', secondaryValueRu: 'Х'},
        {type: 'general', primaryValueEng: ']', secondaryValueEng: '}', primaryValueRu: 'ъ', secondaryValueRu: 'Ъ'},
        {type: 'general', primaryValueEng: '\\', secondaryValueEng: '|', primaryValueRu: 'ё', secondaryValueRu: 'Ё'}
        ],
        [
        {type: 'capsLock', active: false},
        {type: 'general', primaryValueEng: 'a', secondaryValueEng: 'A', primaryValueRu: 'ф', secondaryValueRu: 'Ф'},
        {type: 'general', primaryValueEng: 's', secondaryValueEng: 'S', primaryValueRu: 'ы', secondaryValueRu: 'Ы'},
        {type: 'general', primaryValueEng: 'd', secondaryValueEng: 'D', primaryValueRu: 'в', secondaryValueRu: 'В'},
        {type: 'general', primaryValueEng: 'f', secondaryValueEng: 'F', primaryValueRu: 'а', secondaryValueRu: 'А'},
        {type: 'general', primaryValueEng: 'g', secondaryValueEng: 'G', primaryValueRu: 'п', secondaryValueRu: 'П'},
        {type: 'general', primaryValueEng: 'h', secondaryValueEng: 'H', primaryValueRu: 'р', secondaryValueRu: 'Р'},
        {type: 'general', primaryValueEng: 'j', secondaryValueEng: 'J', primaryValueRu: 'о', secondaryValueRu: 'О'},
        {type: 'general', primaryValueEng: 'k', secondaryValueEng: 'K', primaryValueRu: 'л', secondaryValueRu: 'Л'},
        {type: 'general', primaryValueEng: 'l', secondaryValueEng: 'L', primaryValueRu: 'д', secondaryValueRu: 'Д'},
        {type: 'general', primaryValueEng: ';', secondaryValueEng: ':', primaryValueRu: 'ж', secondaryValueRu: 'Ж'},
        {type: 'general', primaryValueEng: '\'', secondaryValueEng: '"', primaryValueRu: 'э', secondaryValueRu: 'Э'},
        {type: 'general', primaryValueEng: '\n', secondaryValueEng: '\n', primaryValueRu: '\n', secondaryValueRu: '\n', className: 'enter'},
        ],
        [{type: 'shift', active: false}, 
        {type: 'general', primaryValueEng: 'z', secondaryValueEng: 'Z', primaryValueRu: 'я', secondaryValueRu: 'Я'},
        {type: 'general', primaryValueEng: 'x', secondaryValueEng: 'X', primaryValueRu: 'ч', secondaryValueRu: 'Ч'},
        {type: 'general', primaryValueEng: 'c', secondaryValueEng: 'C', primaryValueRu: 'с', secondaryValueRu: 'С'},
        {type: 'general', primaryValueEng: 'v', secondaryValueEng: 'V', primaryValueRu: 'м', secondaryValueRu: 'М'},
        {type: 'general', primaryValueEng: 'b', secondaryValueEng: 'B', primaryValueRu: 'и', secondaryValueRu: 'И'},
        {type: 'general', primaryValueEng: 'n', secondaryValueEng: 'N', primaryValueRu: 'т', secondaryValueRu: 'Т'},
        {type: 'general', primaryValueEng: 'm', secondaryValueEng: 'M', primaryValueRu: 'ь', secondaryValueRu: 'Ь'},
        {type: 'general', primaryValueEng: ',', secondaryValueEng: '<', primaryValueRu: 'б', secondaryValueRu: 'Б'},
        {type: 'general', primaryValueEng: '.', secondaryValueEng: '>', primaryValueRu: 'ю', secondaryValueRu: 'Ю'},
        {type: 'general', primaryValueEng: '/', secondaryValueEng: '?', primaryValueRu: '/', secondaryValueRu: '?'},
        {type: 'shift', active: false}
        ],
        [
            {type: 'control'},
            {type: 'alt'},
            {type: 'command'},
            {type: 'general', primaryValueEng: ' ', secondaryValueEng: ' ', primaryValueRu: ' ', secondaryValueRu: ' ', className: 'space'},
            {type: 'command'},
            {type: 'alt'},
            {type: 'leftArrow'},
            {type: 'topArrow'},
            {type: 'bottomArrow'},
            {type: 'rightArrow'}
        ]
    ];

    let textField = createTextField();
    textField.focus();
    createKey(layout, textField);
    let storage = window.localStorage;
    storage.setItem('language', 'eng');
}

class Key {
    constructor(keyValue, language, textField) {
        this.keyValue = keyValue;
        this.language = language;
        this.textField = textField;
    }

    createKeyContainer(){
        this.container = document.createElement('div');
        switch (this.keyValue.type) {
        case 'delete':
            this.createKeyNode('delete', 'delete');
            break;
        case 'shift': 
            this.createKeyNode('shift', 'shift');
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
            generalKeyRu.innerHTML = this.keyValue.primaryValueRu;
            generalKeyEng.innerHTML = this.keyValue.primaryValueEng;
            this.container.appendChild(generalKeyRu);
            this.container.appendChild(generalKeyEng);
            this.container.classList.add('general');
            if('className' in this.keyValue){
                this.container.classList.add(this.keyValue.className);
            }
            if(this.language === 'ru'){
               generalKeyEng.classList.add('hidden');
            }
            if(this.language === 'eng'){
                generalKeyRu.classList.add('hidden');
            }
            
            break; 
        }


        this.container.addEventListener('click',  () => {
            this.onKeyHandler();
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


