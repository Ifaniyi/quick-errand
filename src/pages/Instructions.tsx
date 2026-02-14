import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Instructions() {
  const { service } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState("");

  return (
    <section className="min-h-screen bg-slate-50 pt-32">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-2xl font-semibold capitalize mb-2">
          {service}
        </h2>

        <p className="text-slate-500 mb-6">
          What do you need?
        </p>

        <textarea
          value={items}
          onChange={(e) => setItems(e.target.value)}
          className="w-full min-h-[150px] border rounded-xl p-4"
          placeholder="Describe items..."
        />

        <button
          disabled={!items}
          onClick={() =>
            navigate("/riders", {
              state: { service, items },
            })
          }
          className={`mt-6 w-full py-3 rounded-xl ${
            items
              ? "bg-teal-600 text-white"
              : "bg-slate-200 text-slate-400"
          }`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
