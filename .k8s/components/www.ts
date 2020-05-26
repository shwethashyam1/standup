import env from "@kosko/env"
import { create } from "@socialgouv/kosko-charts/components/app"
import { ConfigMap } from "kubernetes-models/v1/ConfigMap"

const params = env.component("www");
const { deployment, ingress, service } = create(params)

const envConfigMap = new ConfigMap({
  metadata: {
    labels: params.labels,
    name: `${params.name}-env`,
  },
  data: {
    GITHUB_ORGANIZATION: process.env.GITHUB_ORGANIZATION || "SocialGouv",
    HASURA_URL: process.env.HASURA_URL || "http://hasura",
    NODE_ENV: "production",
  }
})

deployment.spec!.template.spec!.containers[0].envFrom = [
  {
    configMapRef: {
      name: envConfigMap.metadata!.name
    }
  }
]

export default [deployment, ingress, service, envConfigMap]
