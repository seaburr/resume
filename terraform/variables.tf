variable "digitalocean_token" {
  type        = string
  description = "Sets the token for authenticating with DigialOcean."
  default     = null
  sensitive   = true
}