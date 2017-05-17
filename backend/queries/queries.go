package queries

import "fmt"

func Check() {

  fmt.Println("Test check queries")

}

var GetAllTopics = `select array_to_json(array_agg(row_to_json(t))) as json
                    from (
                      select id, name, creator_id, created_at, updated_at,
                        (
                          select avg(vote)
                          from user_votes
                          where topics.id = user_votes.topic_id
                          group by topic_id
                        ) as average_vote,
                        (
                          select array_to_json(array_agg(row_to_json(v)))
                          from (
                            select id, vote, user_id, topic_id
                            from user_votes
                            where topic_id = topics.id
                          ) v
                        ) as votes
                      from topics
                    ) t`
