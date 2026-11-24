import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Badge from "./components/Badge";
import Button from "./components/Button";
import EmptyState from "./components/EmptyState";
import ErrorMessage from "./components/ErrorMessage";
import Spinner from "./components/Spinner";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mx-auto max-w-xl space-y-6 p-8">
      <Badge>React</Badge>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <Spinner />
      <ErrorMessage message="Test Error" onRetry={() => alert("retry")} />
      <EmptyState title="Nothing here" description="This is an empty state." />
    </div>
  </StrictMode>,
);