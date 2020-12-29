# Instrucciones para levantar la aplicación

En una consola dentro del directorio raiz del proyecto

Crear red para contenedores.
```
docker network create cripto
```

Compilar contenedor de backend.
```
docker build -t cripto/backend ./backend/
```

Compilar contenedor de base de datos.
```
docker build -t cripto/mysql ./mysql/
```

Inicializar contenedores en la red
```
docker run --name cripto_backend -p 80:80 -d --network cripto cripto/backend
```

```
docker run --name cripto_mysql -p 3306:3306 -d --network cripto cripto/mysql
```