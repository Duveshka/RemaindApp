FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build-env
WORKDIR /app
EXPOSE 5000

COPY DatingApp.API.csproj ./
RUN dotnet restore DatingApp.API.csproj

COPY . ./

RUN dotnet publish DatingApp.API.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "DatingApp.API.dll"]