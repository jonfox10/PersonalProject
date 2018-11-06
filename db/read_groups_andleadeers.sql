SELECT h.group_name, h.group_leader_name, h.group_leader_phone, h.group_size, g.leader_type
FROM hs_group_info_2018 h
JOIN group_leader g ON h.leader_id = g.leader_id;