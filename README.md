## (indicador avaliativo)

## Tutorial para subir um site utilizando o Vercel 


1. Antes de subir o site, tenha em mente que você tera que corrigir todos os erros dentro da sua aplicação, qualquer erro impossibilita o site de ir ao ar.


2. de um ´git init´ (se nao tiver versionado) dentro da pasta do seu projeto para comecar a utilizar o git.


3. Com os erros ja corrigidos(voce pode verificar utilizando o inspecionar do seu navegador) suba seu site para o GitHub ou se você ja tiver, faça um commit para atualizar o codigo.


4. Verifique se o projeto se encontra dentro do seu GitHub, após isso, entra no site da vercel, na area de "project" e suba seu projeto.


5. Caso a build dê errado, volte no seu codigo e corrija os erros (boa sorte amigo).


6. Apos ser publicado, o Vercel dara o link para que possa acessa-lo (exemplo: api-dos-gurii-888z.vercel.app)




## Como enviar arquivos NextJS para o Github Pages 



1. para iniciar, primeiro abre a arquivo ´next.config.mjs´ e coloque ou altera o seguinte comando: 



```
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images:{
        unoptimized:true,
    },
};

export default nextConfig;
```

2. Dê o comando: "npx next build" dentro do seu projeto

3. Copie da pasta 'out' todos os arquivos, crie uma pasta nova e cole. Após isso, crie um repositorio dessa maneira: SeuNome.github.io

E.emplo: ImHugoo.github.io




