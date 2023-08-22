import React from "react";
import Results from "@/components/Results";
import { useRouter } from "next/router";
function result() {
  const router = useRouter();
  const { query } = router;
  return <Results total={query.total || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />;
}

export default result;
