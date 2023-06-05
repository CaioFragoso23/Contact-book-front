import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserData, userSchema } from "@/schemas/users.schema";
import { useAuth } from "@/context/authContext";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });
  const { signUp } = useAuth();
  const onFormSubmit = (formData: UserData) => {
    signUp(formData);
  };
  return (
    <div>
      <p>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div>
            <label htmlFor="name">Nome</label>
            <div>
              <input
                type="text"
                placeholder="Digite aqui seu nome..."
                {...register("name")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="text"
                placeholder="Digite aqui seu email..."
                {...register("email")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <div>
              <input
                type="password"
                placeholder="Digite aqui sua senha..."
                {...register("password")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <div>
              <input
                type="text"
                placeholder="Digite aqui seu número..."
                {...register("phone")}
              />
            </div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </p>
    </div>
  );
};

export default RegisterForm;
