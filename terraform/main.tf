resource "digitalocean_app" "resume" {
    spec {
        domains  = [
            "resume.chasberndt.com",
        ]
        features = [
            "buildpack-stack=ubuntu-22",
        ]
        name     = "resume"
        region   = "nyc"

        alert {
            disabled = false
            rule     = "DEPLOYMENT_FAILED"
        }
        alert {
            disabled = false
            rule     = "DOMAIN_FAILED"
        }

        ingress {
            rule {
                component {
                    name                 = "resume"
                    preserve_path_prefix = false
                    rewrite              = null
                }
                match {
                    path {
                        prefix = "/"
                    }
                }
            }
        }

        static_site {
            build_command     = "rm *.md && rm -r terraform/"
            catchall_document = null
            dockerfile_path   = null
            environment_slug  = "html"
            error_document    = "404.html"
            index_document    = null
            name              = "resume"
            output_dir        = null
            source_dir        = "/"

            github {
                branch         = "main"
                deploy_on_push = true
                repo           = "seaburr/resume"
            }
        }
    }
}