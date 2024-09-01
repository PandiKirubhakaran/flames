export const calculateFlames = (username: string, userPartnerName: string): string => {
    let name1 = username.toLowerCase().replace(/\s+/g, "");
    let name2 = userPartnerName.toLowerCase().replace(/\s+/g, "");
  
    for (let char of name1) {
      if (name2.includes(char)) {
        name1 = name1.replace(char, "");
        name2 = name2.replace(char, "");
      }
    }
  
    const remainingLetters = name1.length + name2.length;
    const flames = ["F", "L", "A", "M", "E", "S"];
    let index = 0;
  
    while (flames.length > 1) {
      index = (remainingLetters - 1 + index) % flames.length;
      flames.splice(index, 1);
    }
  
    const finalResult = flames[0];
    const relationships = {
      F: "Friends",
      L: "Lovers",
      A: "Affection",
      M: "Marriage",
      E: "Enemies",
      S: "Siblings",
    };
  
    return relationships[finalResult as keyof typeof relationships] || "Unknown";
  };
  