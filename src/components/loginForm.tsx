import { useAuth } from "@/context/authContext";
import { LoginData, loginSchema } from "@/schemas/users.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
const LoginForm = () => {

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  });

  const { signIn } = useAuth();

  const onFormSubmit = (formData: LoginData) => {
    signIn(formData);
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              placeholder="example@mail.com"
              {...register("email")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <div>
            <input
              type="password"
              placeholder="Digite sua senha aqui..."
              {...register("password")}
            />
          </div>
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
        <Link href={"/register"}>Não é cadastrado ainda? Clique Aqui</Link>
      </form>
    </div>
  );
};

export default LoginForm