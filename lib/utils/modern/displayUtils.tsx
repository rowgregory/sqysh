import { Sparkles, Zap, Wrench, AlertTriangle, Circle } from "lucide-react";

export const getChangeIcon = (type: string) => {
  switch (type) {
    case "features":
      return <Sparkles className="w-5 h-5" />;
    case "improvements":
      return <Zap className="w-5 h-5" />;
    case "fixes":
      return <Wrench className="w-5 h-5" />;
    case "breaking":
      return <AlertTriangle className="w-5 h-5" />;
    default:
      return <Circle className="w-5 h-5" />;
  }
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case "Major Release":
      return "from-cyan-400 to-blue-500";
    case "Minor Release":
      return "from-green-400 to-emerald-500";
    case "Patch":
      return "from-yellow-400 to-orange-500";
    case "Hotfix":
      return "from-red-400 to-pink-500";
    default:
      return "from-purple-400 to-indigo-500";
  }
};

export const getChangeColor = (type: string) => {
  switch (type) {
    case "features":
      return "text-cyan-400 border-cyan-400/30";
    case "improvements":
      return "text-green-400 border-green-400/30";
    case "fixes":
      return "text-yellow-400 border-yellow-400/30";
    case "breaking":
      return "text-red-400 border-red-400/30";
    default:
      return "text-purple-400 border-purple-400/30";
  }
};
