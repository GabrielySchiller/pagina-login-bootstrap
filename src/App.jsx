
import './App.css'


function App() {
  

  return (
    <>
      <div className='d-flex row w-100  vh-100  custom-text'>
        <div className='col-lg-6 bg-primary w-50 '>
          
          <div className='d-flex justify-content-start align-self-center w-5 h-5 text-center'>
            <p className='fs-5 custom-title  text-white m-5 border border-white border-1 rounded-circle p-2  text-center'>
              GB
            </p>
          </div>

          <div className=' d-flex flex-column justify-content-center text-center align-self-center mt-5  gap-3'>
            <h2 className=' text-white mt-5'>Bem vindo</h2>
            <p className='text-white w-70 '>Faça login em nossa loja para aproveitar descontos exclusivos, promoções imperdíveis e ofertas incríveis feitas especialmente para você!</p>
          </div>
        </div>
        
        <div className='col-lg-6 w-50 h-100 mt-5 '>
            <div className='d-flex justify-content-center flex-column'>
              <div className='d-flex justify-content-center'>
                <h3 className='  text-primary mt-5'>Login</h3>
              </div>


              <div className='d-flex justify-content-center flex-column gap-5 mt-4 '>
                 <form className='input-group d-flex justify-content-center '>
                  <span className='input-group-text w-20 h-25 bg-primary text-white '>Nome</span>
                  <input className='w-50 h-30 border-1 border-bottom  border-primary ' type='text' />
                </form>
                <form className='input-group input-group d-flex justify-content-center '>
                  <span className='input-group-text  w-20 h-25  bg-primary text-white '>Senha</span>
                  <input className='w-50 h-30 border-1 border-bottom border-primary  ' type='text' />
                </form>
              
              <div className='form-check form-switch d-flex justify-content-center me-3 gap-3'>
                <input className='form-check-input' type='checkbox' id='myswitch' name='mode' value='no' />
                <label className='form-check-label' for='myswitch'>Lembrar de mim</label>
              </div>
              </div>




              <div className='d-flex justify-content-center'>
                <button className='btn btn-primary text-white w-50 mt-3 '>Login</button>
              </div>


              <div className='d-flex justify-content-center mt-5 text-center gap-3 flex-column '>
                <a href='#'>Esqueceu a senha</a>
                <p>Não tem uma conta? <a href='#' >Registre-se</a></p>
              </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default App
