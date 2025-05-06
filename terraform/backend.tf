terraform { 
  cloud { 
    organization = "seaburr" 
    workspaces { 
      name = "resume" 
    } 
  } 
}