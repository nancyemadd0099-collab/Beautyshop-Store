import './Login.css'
import { useForm } from "react-hook-form"

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()


    function myhandleSubmit(data) {
        console.log(data)
    }
    return (
        <>
            <section className='login-section'>
                <div className="container">
                    <div className="header-login">
                        <p className='gradient'><i class="fa-regular fa-heart heart"></i> BeautyShop</p>
                    </div>
                    <div className="card-login">
                        <div className="partone-login">
                            <p>Welcome Back</p>
                            <p>Sign in to your account to continue shopping</p>
                        </div>

                        <form onSubmit={handleSubmit(myhandleSubmit)}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email' id='email' placeholder='name@example.com'
                                    {...register("username", {
                                        required: "This Field Is Requied",
                                        minLength: {
                                            value: 10,
                                            message: "Min Length is 10"
                                        },
                                    })} />
                                {errors.username && (<p style={{ color: "red" }}>{errors.username.message}</p>)}
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' placeholder='********'
                                    {...register("password", {
                                        required: "This Field Is Required",
                                    })} />
                                {errors.password && (<p style={{color:"red"}}>{errors.password.message}</p>)}
                            </div>

                            <button>Sign In</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Login