import fastify from "fastify";
import cors from "@fastify/cors";
const server = fastify({ logger: true });

server.register(cors, {
  //   origin: "http://localhost:3000",
  origin: "*",
});

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
  { id: 8, name: "AlphaTauri", base: "Faenza, Italy" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" },
  { id: 11, name: "Uralkali Haas F1 Team", base: "Banbury, United Kingdom" },
  { id: 12, name: "Scuderia Toro Rosso", base: "Faenza, Italy" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 2, name: "Lando Norris", team: "McLaren" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);

  return { drivers };
});

interface DriversParams {
  id: string;
}

server.get<{ Params: DriversParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    res.type("application/json").code(404);
    return { message: "Driver Not Found" };
  }

  res.type("application/json").code(200);
  return driver;
});

interface CreateTeamBody {
  name: string;
  base: string;
}

server.post<{ Body: CreateTeamBody }>("/teams", async (req, res) => {
  const { name, base } = req.body;
  console.log(teams.length);

  const newTeam = {
    id: teams.length + 1,
    name,
    base,
  };

  teams.push(newTeam);

  res.type("application/json").code(200);
  return newTeam;
});

server.listen({ port: 3333 }, () => {
  console.log("Server init in Port 3333");
});
