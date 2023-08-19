import React from "react";
import Results from "@/components/Results";
import { useRouter } from "next/router";
function result() {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return <Results total={query.total} />;
}

export default result;
