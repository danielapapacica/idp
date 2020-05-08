docker swarm leave --force
docker swarm init
docker service create --replicas 1 --name my-prometheus_node2 --mount type=bind,source=C:\tmp\prometheus.yml,destination=/etc/prometheus/prometheus.yml --publish published=9090,target=9090,protocol=tcp prom/prometheus