import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.loginBgColor};
`

export const LoginResponsiveContainer = styled.div`
  background-color: ${props => props.responsiveBgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  max-width: 550px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 40%;
    max-width: 1140px;
  }
`

export const LogoImage = styled.img`
  width: 120px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 25px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const Label = styled.label`
  color: ${props => props.labelTextColor};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const Input = styled.input`
  color: #616e7c;
  background-color: transparent;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  border: solid #f9f9f9 0.5px;
  border-radius: 5px;
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const CheckBoxInput = styled.input`
  margin-right: 8px;
  align-self: center;
  @media screen and (min-width: 768px) {
    height: 20px;
  }
`
export const PasswordLabel = styled.label`
  color: ${props => props.passwordColor};
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const LoginButton = styled.button`
  color: #ffffff;
  font-family: 'roboto';
  font-size: 14px;
  font-weight: normal;
  background-color: #3b82f6;
  border: none;
  border-radius: 10px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ShowMsg = styled.p`
  color: #ff0000;
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
