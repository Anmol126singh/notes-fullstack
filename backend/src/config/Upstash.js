import { Redis } from "@upstash/redis";
import {Ratelimit} from "@upstash/ratelimit"
import { configDotenv } from "dotenv";
configDotenv();
console.log("REDIS URL:", process.env.UPSTASH_REDIS_REST_URL);
console.log("REDIS TOKEN:", process.env.UPSTASH_REDIS_REST_TOKEN);

const ratelimit = new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(5,"10 s")
})
export default ratelimit;