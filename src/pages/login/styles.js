import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalLogin = styled.div`
    width: 60%;
    height: 70%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 140px;
`

export const ImageBlock = styled.div`
    width: 300px;
    height: auto;
    
    margin-top: 5%;
    margin-bottom: 5%;
            
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 220px;
        height: 100px;
    }
`

export const Form = styled.div`
    width: 60%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.div`
    input {
        width: 100%;
        height: 40px;
        padding: 0px 20px;
        margin-bottom: 20px;
        border: 1px solid #216a6c;
        border-radius: 4px;
        color: #000;
        font-weight: bold;
        font-size: 14px;
        outline: 0px;
    }

    input[type='number'] {
        -moz-appearance:textfield;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

export const ButtonSubmit = styled.div`
        input {
            display: block;
            width: 100%;
            height: 40px;
            padding: 0px 94px;
            border-radius: 4px;
            background-color: #216a6c;
            border: 1px solid #216a6c;
            color: #fff;
            text-align: center;
            font-weight: bold;
            font-size: 14px;
            outline: 0px;
            cursor: pointer;
        }
`

export const Label = styled.div`
    label {
        
        color: #FF0000;
        font-weight: bold;
        
    }
`