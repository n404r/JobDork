export function generateVariations(role: string): string[] {
  if (!role) return [];

  const lowerRole = role.toLowerCase().trim();
  
  // Basic matching rules for variations
  if (lowerRole.includes("security") || lowerRole.includes("cyber")) {
    return [
      "Cyber Security Analyst",
      "SOC Analyst",
      "Security Analyst",
      "Threat Analyst",
      "Blue Team Analyst",
      "Detection Engineer",
      "Security Engineer",
      "Information Security Analyst"
    ];
  }
  
  if (lowerRole.includes("frontend") || lowerRole.includes("front end") || lowerRole.includes("front-end")) {
    return [
      "Frontend Engineer",
      "Frontend Developer",
      "UI Engineer",
      "React Developer",
      "Web Developer",
      "JavaScript Engineer"
    ];
  }

  if (lowerRole.includes("backend") || lowerRole.includes("back end") || lowerRole.includes("back-end")) {
    return [
      "Backend Engineer",
      "Backend Developer",
      "Server Engineer",
      "Node.js Developer",
      "Java Developer",
      "Systems Engineer"
    ];
  }

  if (lowerRole.includes("ml") || lowerRole.includes("machine learning") || lowerRole.includes("ai") || lowerRole.includes("artificial intelligence")) {
    return [
      "Machine Learning Engineer",
      "AI Engineer",
      "NLP Engineer",
      "LLM Engineer",
      "Data Scientist",
      "Deep Learning Engineer"
    ];
  }

  if (lowerRole.includes("data") || lowerRole.includes("analyst")) {
    return [
      "Data Analyst",
      "Data Scientist",
      "Data Engineer",
      "Analytics Engineer",
      "Business Intelligence Analyst"
    ];
  }
  
  if (lowerRole.includes("devops") || lowerRole.includes("sre") || lowerRole.includes("reliability")) {
    return [
      "DevOps Engineer",
      "Site Reliability Engineer",
      "SRE",
      "Cloud Engineer",
      "Platform Engineer",
      "Infrastructure Engineer"
    ];
  }

  if (lowerRole.includes("product") || lowerRole.includes("manager")) {
    return [
      "Product Manager",
      "Technical Product Manager",
      "Product Owner",
      "Growth Product Manager",
      "Group Product Manager"
    ];
  }

  // If no specific match, return some generic variations
  return [
    role,
    `${role} Engineer`,
    `${role} Developer`,
    `${role} Specialist`,
    `Senior ${role}`
  ];
}
