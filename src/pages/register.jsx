import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import { Link } from 'react-router-dom'
import { AuthContext } from '@/contexts/auth'
import { useContext, useState } from 'react'

const Register = () => {
    const { register } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation: passwordConfirmation, setErrors })
    }

    return (
        <AuthCard
            logo={
                <Link to="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            }>
            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />

            <form onSubmit={submitForm}>
                {/* Name */}
                <div>
                    <Label htmlFor="name">Name</Label>

                    <Input
                        id="name"
                        type="text"
                        value={name}
                        className="block mt-1 w-full"
                        onChange={event => setName(event.target.value)}
                        required
                        autoFocus
                    />
                </div>

                {/* Email Address */}
                <div className="mt-4">
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="new-password"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">
                    <Label htmlFor="passwordConfirmation">
                        Confirm Password
                    </Label>

                    <Input
                        id="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        className="block mt-1 w-full"
                        onChange={event =>
                            setPasswordConfirmation(event.target.value)
                        }
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link className="underline text-sm text-gray-600 hover:text-gray-900" to="/login">
                        Already registered?
                    </Link>

                    <Button className="ml-4">Register</Button>
                </div>
            </form>
        </AuthCard>
    )
}

export default Register
